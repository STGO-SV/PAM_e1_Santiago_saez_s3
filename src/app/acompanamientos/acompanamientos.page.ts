import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acompanamientos',
  templateUrl: './acompanamientos.page.html',
  styleUrls: ['./acompanamientos.page.scss'],
})
export class AcompanamientosPage implements OnInit {

  items: { name: string; description: string; price: number; image: string; }[] = [];

  constructor() { 
    console.log('AcompanamientosPage constructor');
  }

  ngOnInit() {
    this.items = [
      { 
        name: 'Palitos de ajo', 
        description: 'Palitos de masa madre al horno bañados en mantequilla, ajo fresco, aceite de oliva y orégano. 6 unidades por porción.', 
        price: 4690, 
        image: 'assets/palitos_de_ajo.jpg' 
      },
      { 
        name: 'Alitas de pollo', 
        description: 'Deliciosas alitas de pollo horneadas en salsa BBQ, acompañadas de una porción de salsa búfala para untar.', 
        price: 5500, 
        image: 'assets/alitas-de-pollo.jpg' 
      },
      { 
        name: 'Bocaditos de queso', 
        description: 'Crocantes bolitas de queso mozzarela fresco apanadas y fritas. 12 unidades.', 
        price: 5000, 
        image: 'assets/cheesy_pops.jpg' 
      },
    ];
    console.log('AcompanamientosPage initialized');
  }
}