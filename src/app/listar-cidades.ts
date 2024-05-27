import { Component, ViewChild } from '@angular/core';
import { ImportsModule } from './imports';
import { Cidade } from '@domain/cidade';
import { ProjetoService } from '@service/projeto-service';
import { CadastrarCidade } from './cadastrar-cidade';
import { ConfirmationService, MessageService } from 'primeng/api';

//-------------------------------------------------------------------------------------
/** Tela para listar cidades */
//-------------------------------------------------------------------------------------
@Component({
    selector: 'listar-cidades',
    templateUrl: 'listar-cidades.html',
    standalone: true,
    imports: [ImportsModule, CadastrarCidade],
    providers: [ProjetoService, MessageService, ConfirmationService]
})
export class ListarCidades {
    //-------------------------------------------------------
    // Lista de cidades, exibida na tabela
    //-------------------------------------------------------
    listaCidades!: Cidade[];

    //-------------------------------------------------------------
    // Atributo que guarda a cidade que foi selecionada na tabela
    //-------------------------------------------------------------
    cidadeSelecionada: Cidade = new Cidade();

    //-------------------------------------------------------------
    // Flag usada para mostrar/esconder a janela de cadastro
    //-------------------------------------------------------------
    mostraJanelaCadastro: boolean = false;

    //--------------------------------------------------------------
    /** Construtor. Recebe os services usados pelo componente */
    //--------------------------------------------------------------
    constructor(private service: ProjetoService, private messageService: MessageService, private confirmationService: ConfirmationService) {}

    //-------------------------------------------------------------------------------------
    /** Inicializacao do componente. Recupera a lista de cidades para exibir na tabela */
    //-------------------------------------------------------------------------------------
    ngOnInit() {
        this.pesquisarCidades();
    }

    //-------------------------------------------------------------------------------------
    /** Método chamado para recuperar cidades para a tabela */
    //-------------------------------------------------------------------------------------
    public pesquisarCidades() {
        this.service.pesquisarCidades().subscribe((cidades) => {
            this.listaCidades = cidades ;
        });
    }

    //-------------------------------------------------------------------------------------
    /** Método chamado ao clicar no botão 'Nova Cidade' */
    //-------------------------------------------------------------------------------------
    public abreJanelaParaCadastrarNovaCidade() {
        // Define a cidade selecionada como uma nova cidade
        this.cidadeSelecionada = new Cidade();

        // Exibe a janela de cadastro
        this.mostraJanelaCadastro = true;
    }

    //-------------------------------------------------------------------------------------
    /** Método chamado ao clicar no botão 'Alterar' */
    //-------------------------------------------------------------------------------------
    public abreJanelaParaAlterarCidade(cidade: Cidade) {
        // Copia os dados da cidade selecionada para uma nova cidade
        this.cidadeSelecionada = new Cidade();
        this.cidadeSelecionada.id = cidade.id;
        this.cidadeSelecionada.nome = cidade.nome;
        this.cidadeSelecionada.uf = cidade.uf;
        this.cidadeSelecionada.capital = cidade.capital;

        // Exibe a janela de cadastro
        this.mostraJanelaCadastro = true;
    }

    //-------------------------------------------------------------------------------------
    /** Método chamado ao clicar no botão 'Excluir' */
    //-------------------------------------------------------------------------------------
    public excluir(cidade: Cidade) {
        // Chama o backend para excluir a cidade selecionada
        this.service.excluir(cidade).subscribe((retorno) => {
            this.messageService.add({ severity: 'success', summary: 'Info', detail: `Cidade '${cidade.nome}' excluída com sucesso!` });

            // Atualiza a lista de cidades
            setTimeout(() => this.pesquisarCidades(), 100);
        }) ;
    }

    //-------------------------------------------------------------------------------------
    /** Método chamado quando a janela de cadastro é fechada */
    //-------------------------------------------------------------------------------------
    public fechaJanelaCadastro(salvou: boolean) {
        // Esconde a janela de cadastro
        this.mostraJanelaCadastro = false;

        // Se salvou, atualiza a lista de cidades
        if(salvou) {
            setTimeout(() => this.pesquisarCidades(), 100);
        }
    }

    //-------------------------------------------------------------------------------------
    /** Método para verificar se é UF e retornar um texto */
    //-------------------------------------------------------------------------------------
    public isCapital(capital: boolean){
      if(capital){
        return 'Sim'
      }else{
        return 'Não'
      }
    }
    //-------------------------------------------------------------------------------------
    /** Método chamado pelo ConfirmDialog ao clicar no botão Excluir */
    //-------------------------------------------------------------------------------------
    confirm(cidade: Cidade){
      this.confirmationService.confirm({
        message: `Tem certeza que deseja excluir a cidade ${cidade.nome}?`,
        header: 'Excluir',
        accept: () => {
          this.excluir(cidade);
        },
        acceptLabel: 'Sim',
        rejectLabel: 'Não'
      })
    }

}
