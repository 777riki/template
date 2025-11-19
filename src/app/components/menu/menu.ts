
/*
  Component: Menu
  File: src/app/components/menu/menu.ts
  Description: Componente per la pagina del menù; attualmente struttura statica in HTML.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu implements OnInit {

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
