import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
})
export class BebidasPage implements OnInit {

  items: { name: string; description: string; price: number; image: string; quantity: number }[] = [];

  constructor(private cartService: CartService) { 
    console.log('BebidasPage constructor');
  }

  ngOnInit() {
    this.items = [
      { 
        name: 'Coca Cola', 
        description: '1,5 lts', 
        price: 3090, 
        image: 'assets/coca_cola.jpg',
        quantity: 0 
      },
      { 
        name: 'Coca Cola Sin Azúcar', 
        description: '1,5 lts', 
        price: 3090, 
        image: 'assets/coca_zero.jpg',
        quantity: 0 
      },
      { 
        name: 'Fanta', 
        description: '1,5 lts', 
        price: 3090, 
        image: 'assets/fanta.jpg',
        quantity: 0 
      },
      { 
        name: 'Fanta Sin Azúcar', 
        description: '1,5 lts', 
        price: 3090, 
        image: 'assets/fanta_zero.jpg',
        quantity: 0 
      },
      { 
        name: 'Sprite', 
        description: '1,5 lts', 
        price: 3090, 
        image: 'assets/sprite.jpg',
        quantity: 0 
      },
      { 
        name: 'Sprite Sin Azúcar', 
        description: '1,5 lts', 
        price: 3090, 
        image: 'assets/sprite_zero.jpg',
        quantity: 0 
      },
    ];
    console.log('BebidasPage initialized');
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
      item.quantity = 0;  // Reset the quantity after adding to cart
    } else {
      console.log('La cantidad debe ser mayor que 0');
    }
  }
}