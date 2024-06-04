import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postres',
  templateUrl: './postres.page.html',
  styleUrls: ['./postres.page.scss'],
})
export class PostresPage implements OnInit {

  items: { name: string; description: string; price: number; image: string; }[] = [];

  constructor() { 
    console.log('PostresPage constructor');
  }

  ngOnInit() {
    this.items = [
      { 
        name: 'Crostata pistachio ricotta', 
        description: 'Tarta italiana rellena de queso ricotta y pistachos. 1 porción.', 
        price: 5000, 
        image: 'assets/pistacho_ricota_crostata.jpg' 
      },
      { 
        name: 'Torta caprese', 
        description: 'Torta hecha de chocolate amargo derretido y almendras molidas. 1 porción.', 
        price: 5000, 
        image: 'assets/torta_caprese.jpg' 
      },
      { 
        name: 'Helado de pistacho', 
        description: 'Cremoso helado de pistacho decorado con pistachos frescos partidos. 1 porción.', 
        price: 5000, 
        image: 'assets/helado_pistacho.jpg' 
      },
    ];
    console.log('PostresPage initialized');
  }
}