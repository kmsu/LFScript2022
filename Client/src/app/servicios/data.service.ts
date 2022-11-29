import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contenidoEditor$ = new EventEmitter<string>();
  contenidoConsola$ = new EventEmitter<string>();
  limpiar$ = new EventEmitter<string>();
  
  constructor() { }
}
