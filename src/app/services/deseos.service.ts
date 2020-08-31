import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.models';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas : Lista[] = [];
  
  
  constructor() { 

    this.cargarStorage();
   // const lista1 = new Lista('Realizar curso de Udemy');
   // const lista2 = new Lista('Aprender Android');

   // this.listas.push(lista1, lista2);

   // console.log(this.listas);

  }


  crearLista( titulo: string){

    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    }

    guardarStorage(){
        
      localStorage.setItem('data', JSON.stringify(this.listas));

    }


    cargarStorage(){
      
      if (localStorage.getItem('data')){
        this.listas = JSON.parse( localStorage.getItem('data'));
      } else {
        this.listas = [];
      }
      

    }
}
