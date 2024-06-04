import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.page.html',
  styleUrls: ['./pizzas.page.scss'],
})
export class PizzasPage implements OnInit {

  items: { name: string; description: string; price: number; image: string; quantity: number }[] = [];

  constructor(private cartService: CartService) { 
    console.log('PizzasPage constructor');
  }

  ngOnInit() {
    this.items = [
      { 
        name: 'Hawaiana', 
        description: 'Salsa de tomates, queso mozarella, jamón, piña, extra queso', 
        price: 12990, 
        image: 'assets/hawaiana.jpg',
        quantity: 0 
      },
      { 
        name: 'Diavola', 
        description: 'Auténtico salamino picante italiano, queso mozzarella, salsa de tomates.', 
        price: 13990, 
        image: 'assets/diavola.jpg',
        quantity: 0 
      },
      { 
        name: 'Margarita', 
        description: 'Pizza típica napolitana hecha con tomates aplastados a mano, queso mozzarella, hojas frescas de albahaca y aceite de oliva extra virgen.', 
        price: 10990, 
        image: 'assets/margarita.jpg',
        quantity: 0 
      },
    ];
    console.log('PizzasPage initialized');
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