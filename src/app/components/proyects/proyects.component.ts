import { Component, OnInit } from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  constructor() { }

  goToUrlSpoti(){
    window.location.href='https://dantepileckas-spotiapp.herokuapp.com/#/';
  }

  goToUrlSpotiBehance(){
    window.location.href='https://www.behance.net/gallery/118869851/SpotiApp/';
  }

  goToUrlTienda(){
    window.location.href='http://elpueblitotienda.com.ar/';
  }

  goToUrlTiendaBehance(){
  window.location.href='https://www.behance.net/gallery/116674043/Ecommerce-El-pueblito-tu-tienda/';
  }

  goToUrlVeterinaria(){
    window.location.href='https://dantepileckas.github.io/citasReact/';
  }

  goToUrlCotizador(){
    window.location.href='https://dantepileckas.github.io/Cotizador/';
  }

  goToUrlNoticias(){
    window.location.href='https://github.com/DantePileckas/portalDeNoticias';
  }

  goToUrlNoticiasBehance(){
    window.location.href='https://www.behance.net/gallery/143701117/React-NotiApp-Portal-de-Noticias';
  }


  ngOnInit(): void {
  }

}
