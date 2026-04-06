import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100);
  }

  Linkedin(){
    window.location.href='https://www.linkedin.com/in/dante-pileckas-4b503b210/';
  }
  Behance(){
    window.location.href='https://www.behance.net/dantepileckas';
  }
  Wpp(){
    window.location.href='https://wa.link/q8w2h0';
  }
  Git(){
    window.location.href='https://github.com/DantePileckas';
  }
  


}
