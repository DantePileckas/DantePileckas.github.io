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
  goToUrlTienda(){
    window.location.href='http://elpueblitotienda.com.ar/';
}


  ngOnInit(): void {
  }

}
