import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  constructor() {
    this.loadCart();
  }
  private loadCart() {
    const storedCart = localStorage.getItem('cart');
    this.cart = storedCart ? JSON.parse(storedCart) : [];
  }
  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  addToCart(product: any) {
    const exists = this.cart.find(item => item.id === product.id);
    
    if (!exists) {
      this.cart.push(product);
      this.saveCart();
      console.log('✅ Producto añadido al carrito:', product);
    } else {
      console.log('⚠️ El producto ya está en el carrito:', product);
    }
  }
  getCart() {
    return this.cart;
  }
  removeFromCart(index: number) {
    if (index >= 0 && index < this.cart.length) {
      console.log('🗑️ Producto eliminado:', this.cart[index]);
      this.cart.splice(index, 1);
      this.saveCart();
    }
  }
  clearCart() {
    this.cart = [];
    this.saveCart();
    console.log('🛒 Carrito vaciado');
  }
}
