import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.models';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas : Lista[] = [];
  
  
  constructor() { 
    console.log('Servicio Inicializado');
  }
}
