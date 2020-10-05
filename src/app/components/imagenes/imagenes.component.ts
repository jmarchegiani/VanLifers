import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  public titulo : string;
  public mostrar : boolean;

  constructor() {
    this.titulo = 'Johny Beltran cambia recurrentemente';
    this.mostrar = true;
  }

  mostrarTexto() {
    this.mostrar = true;
  }
  ocultarTexto() {
    this.mostrar = false;
  }
  cambiarTexto() {
    if(this.titulo == 'Johny beltran ha cambiado'){
      this.titulo = 'Johny Beltran cambio, si'
    }
    else{
      this.titulo = 'Johny beltran ha cambiado'
    }
  }

  ngOnInit(): void {
  }

}
