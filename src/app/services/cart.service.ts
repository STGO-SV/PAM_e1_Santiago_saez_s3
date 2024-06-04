import { Injectable } from "@angular/core";
export interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = [];

  constructor() { }

  addToCart(item: CartItem) {
    const existingItem = this.cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cart.push(item);
    }
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }
}