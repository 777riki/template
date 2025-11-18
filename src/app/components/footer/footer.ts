/*
  Component: Footer
  File: src/app/components/footer/footer.ts
  Description: Componente footer condiviso. Fornisce link di navigazione e contatti.
*/
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

}
