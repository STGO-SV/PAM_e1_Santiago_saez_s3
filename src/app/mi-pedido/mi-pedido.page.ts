import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../services/cart.service';

@Component({
  selector: 'app-mi-pedido',
  templateUrl: './mi-pedido.page.html',
  styleUrls: ['./mi-pedido.page.scss'],
})
export class MiPedidoPage implements OnInit {

  cart: CartItem[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.quantity * j.price, 0);
  }

  clearCart() {
    this.cartService.clearCart();
    this.cart = [];
  }
}