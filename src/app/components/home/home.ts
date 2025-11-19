import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  scrollToSection() {
    const section = document.getElementById('arrow');
    if (section) {
      window.scrollTo({
        top: window.innerHeight * 0.9,
        behavior: 'smooth'
      });
    }
  }

}
