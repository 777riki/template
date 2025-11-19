/*
  Component: Gallery
  File: src/app/components/gallery/gallery.ts
  Description: Componente della gallery (placeholder). Implementare logica/markup per le immagini.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery implements OnInit {

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
