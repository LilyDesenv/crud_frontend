import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cidade } from '@domain/cidade';
import { Observable, from } from 'rxjs';

@Injectable()
export class ProjetoService {

    constructor(private http: HttpClient) {}

    //------------------------------------------------
    /** Recupera a lista de cidades */
    //------------------------------------------------
    pesquisarCidades(): Observable<any> {
        // TODO: chamar backend, ao invés de retornar uma lista fake
        return this.http.get<Cidade>("http://localhost:8080/mirante/cidades")
        // return from(Promise.resolve(this.getListaCidadesMock()));
    }

    //------------------------------------------------
    /** Exclui a cidade informada */
    //------------------------------------------------
    excluir(cidade: Cidade): Observable<any> {
        // TODO: chamar backend
        return this.http.delete<Cidade>(`http://localhost:8080/mirante/cidades/${cidade.id}`)
        // return null;
    }

    //------------------------------------------------
    /** Salva a cidade informada */
    //------------------------------------------------
    salvar(cidade: Cidade): Observable<any> {
        // TODO: chamar backend
        const json = {
          "id": cidade.id,
          "nome": cidade.nome,
          "uf": cidade.uf,
          "capital": cidade.capital
        }
        return this.http.post<Cidade>("http://localhost:8080/mirante/cidades",json)
        // return null;
    }

    //------------------------------------------------
    /** Lista de cidades para teste */
    //------------------------------------------------
    getListaCidadesMock() {
        return [
            {
                id: '1000',
                uf: 'f230fh0g3',
                nome: 'Bamboo Watch',
                capital: true
            },
            {
                id: '1001',
                uf: 'nvklal433',
                nome: 'Black Watch',
                capital: false
            },
            {
                id: '1002',
                uf: 'zz21cz3c1',
                nome: 'Blue Band',
                capital: true
            },
            {
                id: '1003',
                uf: '244wgerg2',
                nome: 'Blue T-Shirt',
                capital: false
            },
            {
                id: '1004',
                uf: 'h456wer53',
                nome: 'Bracelet',
                capital: true
            },
            {
                id: '1005',
                uf: 'av2231fwg',
                nome: 'Brown Purse',
                capital: false
            },
            {
                id: '1006',
                uf: 'bib36pfvm',
                nome: 'Chakra Bracelet',
                capital: true
            },
            {
                id: '1007',
                uf: 'mbvjkgip5',
                nome: 'Galaxy Earrings',
                capital: true
            },
            {
                id: '1008',
                uf: 'vbb124btr',
                nome: 'Game Controller',
                capital: true
            },
            {
                id: '1009',
                uf: 'cm230f032',
                nome: 'Gaming Set',
                capital: true
            },
            {
                id: '1010',
                uf: 'plb34234v',
                nome: 'Gold Phone Case',
                capital: true
            },
            {
                id: '1011',
                uf: '4920nnc2d',
                nome: 'Green Earbuds',
                capital: true
            },
            {
                id: '1012',
                uf: '250vm23cc',
                nome: 'Green T-Shirt',
                capital: true
            },
            {
                id: '1013',
                uf: 'fldsmn31b',
                nome: 'Grey T-Shirt',
                capital: true
            },
            {
                id: '1014',
                uf: 'waas1x2as',
                nome: 'Headphones',
                capital: true
            },
            {
                id: '1015',
                uf: 'vb34btbg5',
                nome: 'Light Green T-Shirt',
                capital: true
            },
            {
                id: '1016',
                uf: 'k8l6j58jl',
                nome: 'Lime Band',
                capital: true
            },
            {
                id: '1017',
                uf: 'v435nn85n',
                nome: 'Mini Speakers',
                capital: true
            },
            {
                id: '1018',
                uf: '09zx9c0zc',
                nome: 'Painted Phone Case',
                capital: true
            },
            {
                id: '1019',
                uf: 'mnb5mb2m5',
                nome: 'Pink Band',
                capital: true
            },
            {
                id: '1020',
                uf: 'r23fwf2w3',
                nome: 'Pink Purse',
                capital: true
            },
            {
                id: '1021',
                uf: 'pxpzczo23',
                nome: 'Purple Band',
                capital: true
            },
            {
                id: '1022',
                uf: '2c42cb5cb',
                nome: 'Purple Gemstone Necklace',
                capital: true
            },
            {
                id: '1023',
                uf: '5k43kkk23',
                nome: 'Purple T-Shirt',
                capital: true
            },
            {
                id: '1024',
                uf: 'lm2tny2k4',
                nome: 'Shoes',
                capital: true
            },
            {
                id: '1025',
                uf: 'nbm5mv45n',
                nome: 'Sneakers',
                capital: true
            },
            {
                id: '1026',
                uf: 'zx23zc42c',
                nome: 'Teal T-Shirt',
                capital: true
            },
            {
                id: '1027',
                uf: 'acvx872gc',
                nome: 'Yellow Earbuds',

                capital: true
            },
            {
                id: '1028',
                uf: 'tx125ck42',
                nome: 'Yoga Mat',
                capital: true
            },
            {
                id: '1029',
                uf: 'gwuby345v',
                nome: 'Yoga Set',
                capital: true
            }
        ];
    }

};
