/*
  Component: Servizi
  File: src/app/components/servizi/servizi.ts
  Description: Classe componente per la pagina dei servizi; contiene solo metadata per template e stile.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servizi',
  imports: [],
  templateUrl: './servizi.html',
  styleUrl: './servizi.css',
})
export class Servizi implements OnInit{

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
