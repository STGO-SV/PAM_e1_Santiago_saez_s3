import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.page.html',
  styleUrls: ['./extras.page.scss'],
})
export class ExtrasPage implements OnInit {

  items: { name: string; description: string; price: number; image: string; quantity: number }[] = [];

  constructor(private cartService: CartService) { 
    console.log('ExtrasPage constructor');
  }

  ngOnInit() {
    this.items = [
      { 
        name: 'Salsa pesto, porción', 
        description: 'Albahaca fresca, pignoli, aceite de oliva, ajo y queso parmesano.', 
        price: 1390, 
        image: 'assets/pesto.jpg',
        quantity: 0 
      },
      { 
        name: 'Porción de pistachos', 
        description: 'Pistachos tostados, 120g.', 
        price: 2300, 
        image: 'assets/pistachos.jpg',
        quantity: 0 
      }
    ];
    console.log('ExtrasPage initialized');
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 0) {
      item.quantity--;
    }
  }

  addToCart(item: any) {
    if (item.quantity > 0) {
      const cartItem = {
        name: item.name,
        quantity: item.quantity,
        price: item.price
      };
      this.cartService.addToCart(cartItem);
      console.log(`Añadido al carrito: ${cartItem.name} x${cartItem.quantity}`);
      item.quantity = 0;  // Resetear cantidad
    } else {
      console.log('La cantidad debe ser mayor que 0');
    }
  }
}