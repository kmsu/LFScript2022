import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private dataService: DataService) { }

  ngOnInit(): void {
  }

  //Metodos directos de la barra de navegacion
  aboutInfo(){
    alert("Nombre: Kevin Samayoa \nCarnet: 200915348 \nOLC1")
  }

  Abrir(){
    alert("voy a cargar el archivo")
  }

  Limpiar(){
    this.dataService.limpiar$.emit("");
  }

  ejecutar(){
    //emito el servicio para que funcione
    this.dataService.contenidoEditor$.emit();
  }

}
