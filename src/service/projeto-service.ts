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
        return from(Promise.resolve(this.getListaCidadesMock()));
    }    

    //------------------------------------------------
    /** Exclui a cidade informada */
    //------------------------------------------------
    excluir(cidade: Cidade): Observable<any> {        
        // TODO: chamar backend
        return null;
    }

    //------------------------------------------------
    /** Salva a cidade informada */
    //------------------------------------------------    
    salvar(cidade: Cidade): Observable<any> {
        // TODO: chamar backend
        return null;
    }

    //------------------------------------------------
    /** Lista de cidades para teste */
    //------------------------------------------------    
    getListaCidadesMock() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                category: 'Accessories',
                quantity: 24
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'Black Watch',
                category: 'Accessories',
                quantity: 61
            },
            {
                id: '1002',
                code: 'zz21cz3c1',
                name: 'Blue Band',
                category: 'Fitness',
                quantity: 2             
            },
            {
                id: '1003',
                code: '244wgerg2',
                name: 'Blue T-Shirt',
                category: 'Clothing',
                quantity: 25
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'Bracelet',
                category: 'Accessories',
                quantity: 73
            },
            {
                id: '1005',
                code: 'av2231fwg',
                name: 'Brown Purse',
                category: 'Accessories',
                quantity: 0
            },
            {
                id: '1006',
                code: 'bib36pfvm',
                name: 'Chakra Bracelet',
                category: 'Accessories',
                quantity: 5
            },
            {
                id: '1007',
                code: 'mbvjkgip5',
                name: 'Galaxy Earrings',
                category: 'Accessories',
                quantity: 23
            },
            {
                id: '1008',
                code: 'vbb124btr',
                name: 'Game Controller',
                category: 'Electronics',
                quantity: 2
            },
            {
                id: '1009',
                code: 'cm230f032',
                name: 'Gaming Set',
                category: 'Electronics',
                quantity: 63
            },
            {
                id: '1010',
                code: 'plb34234v',
                name: 'Gold Phone Case',
                category: 'Accessories',
                quantity: 0
            },
            {
                id: '1011',
                code: '4920nnc2d',
                name: 'Green Earbuds',
                category: 'Electronics',
                quantity: 23
            },
            {
                id: '1012',
                code: '250vm23cc',
                name: 'Green T-Shirt',
                category: 'Clothing',
                quantity: 74
            },
            {
                id: '1013',
                code: 'fldsmn31b',
                name: 'Grey T-Shirt',
                category: 'Clothing',
                quantity: 0
            },
            {
                id: '1014',
                code: 'waas1x2as',
                name: 'Headphones',
                category: 'Electronics',
                quantity: 8
            },
            {
                id: '1015',
                code: 'vb34btbg5',
                name: 'Light Green T-Shirt',
                category: 'Clothing',
                quantity: 34
            },
            {
                id: '1016',
                code: 'k8l6j58jl',
                name: 'Lime Band',
                category: 'Fitness',
                quantity: 12
            },
            {
                id: '1017',
                code: 'v435nn85n',
                name: 'Mini Speakers',
                category: 'Clothing',
                quantity: 42
            },
            {
                id: '1018',
                code: '09zx9c0zc',
                name: 'Painted Phone Case',
                category: 'Accessories',
                quantity: 41
            },
            {
                id: '1019',
                code: 'mnb5mb2m5',
                name: 'Pink Band',
                category: 'Fitness',
                quantity: 63
            },
            {
                id: '1020',
                code: 'r23fwf2w3',
                name: 'Pink Purse',
                category: 'Accessories',
                quantity: 0
            },
            {
                id: '1021',
                code: 'pxpzczo23',
                name: 'Purple Band',
                category: 'Fitness',
                quantity: 6
            },
            {
                id: '1022',
                code: '2c42cb5cb',
                name: 'Purple Gemstone Necklace',
                category: 'Accessories',
                quantity: 62
            },
            {
                id: '1023',
                code: '5k43kkk23',
                name: 'Purple T-Shirt',
                category: 'Clothing',
                quantity: 2
            },
            {
                id: '1024',
                code: 'lm2tny2k4',
                name: 'Shoes',
                category: 'Clothing',
                quantity: 0
            },
            {
                id: '1025',
                code: 'nbm5mv45n',
                name: 'Sneakers',
                category: 'Clothing',
                quantity: 52
            },
            {
                id: '1026',
                code: 'zx23zc42c',
                name: 'Teal T-Shirt',
                category: 'Clothing',
                quantity: 3
            },
            {
                id: '1027',
                code: 'acvx872gc',
                name: 'Yellow Earbuds',
                category: 'Electronics',
                quantity: 35
            },
            {
                id: '1028',
                code: 'tx125ck42',
                name: 'Yoga Mat',
                category: 'Fitness',
                quantity: 15
            },
            {
                id: '1029',
                code: 'gwuby345v',
                name: 'Yoga Set',
                category: 'Fitness',
                quantity: 25
            }
        ];
    }    

};