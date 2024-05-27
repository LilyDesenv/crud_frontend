import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImportsModule } from './imports';
import { Cidade } from '@domain/cidade';
import { ProjetoService } from '@service/projeto-service';
import { MessageService } from 'primeng/api';
import { ListarCidades } from './listar-cidades'

//-------------------------------------------------------------------------------------
/** Tela para cadastro de cidades */
//-------------------------------------------------------------------------------------
@Component({
    selector: 'cadastrar-cidade',
    templateUrl: 'cadastrar-cidade.html',
    standalone: true,
    imports: [ImportsModule, ListarCidades],
    providers: [ProjetoService]
})
export class CadastrarCidade {

    //-------------------------------------------------------
    // Parâmetro de entrada para o componente
    //-------------------------------------------------------
    @Input() public cidade: Cidade = new Cidade();

    //-------------------------------------------------------
    // Evento lançado ao fechar a janela
    //-------------------------------------------------------
    @Output('onClose') private eventoFechaJanela = new EventEmitter<boolean>();

    //--------------------------------------------------------------
    /** Construtor. Recebe os services usados pelo componente */
    //--------------------------------------------------------------
    constructor(private service: ProjetoService, private messageService: MessageService, private listarCidades: ListarCidades) {}

    //-------------------------------------------------------------------------------------
    /** Método chamado ao clicar no botao 'salvar' */
    //-------------------------------------------------------------------------------------
    public salvar() {
        // Salva a cidade no back end
        this.service.salvar(this.cidade).subscribe(retorno => {
            if(this.cidade.id) {
                this.messageService.add({ severity: 'success', summary: 'Info', detail: `Cidade '${this.cidade.nome}' alterada com sucesso!` });
            } else {
                this.messageService.add({ severity: 'success', summary: 'Info', detail: `Cidade '${this.cidade.nome}' cadastrada com sucesso!` });
            }
            // Atualiza a lista de cidades
            setTimeout(() => this.listarCidades.pesquisarCidades(), 100);
        });


        // Lança evento para fechar a janela
        this.eventoFechaJanela.emit(true) ;
    }

    //-------------------------------------------------------------------------------------
    /** Método chamado ao clicar no botao 'cancelar' */
    //-------------------------------------------------------------------------------------
    public cancelar() {
        // Lança evento para fechar a janela
        this.eventoFechaJanela.emit(false) ;
    }

}
