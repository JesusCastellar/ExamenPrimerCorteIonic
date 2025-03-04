import { Component } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: false
})
export class CartPage {
  cartItems: any[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ionViewWillEnter() {
    this.loadCart();
  }
  loadCart() {
    this.cartItems = this.cartService.getCart();
    console.log('Carrito actualizado:', this.cartItems);
  }
  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
    this.loadCart();
  }
  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
  checkout() {
    if (this.cartItems.length > 0) {
      this.router.navigate(['/checkout']);
    } else {
      console.log('El carrito está vacío');
    }
  }
}
