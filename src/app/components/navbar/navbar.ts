/*
  Component: Navbar
  File: src/app/components/navbar/navbar.ts
  Description: Componente della barra di navigazione. Utilizza RouterLink per il routing interno.
*/
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

}
