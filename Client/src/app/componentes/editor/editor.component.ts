import { Component, OnInit } from '@angular/core';
import { text } from 'express';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  contenidoEditor: string = ''; //propiedad que almacena el contenido del area de texto
  
  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
    this.dataService.contenidoEditor$.subscribe(text => {
      this.dataService.contenidoConsola$.emit(this.contenidoEditor);
    })

    this.dataService.limpiar$.subscribe( texto => {
      this.contenidoEditor = texto;
    })
  }

  /*
  getContenido(contenido:string){
    this.contenidoEditor = contenido;
    console.log(this.contenidoEditor);
  }
  */
}
