/*
  Component: Chisiamo
  File: src/app/components/chisiamo/chisiamo.ts
  Description: Classe del componente Angular per la pagina "Chi Siamo".
  Note: Questo file definisce il selettore e i riferimenti a template e stile.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chisiamo',
  imports: [],
  templateUrl: './chisiamo.html',
  styleUrl: './chisiamo.css',
})
export class Chisiamo implements OnInit {

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
