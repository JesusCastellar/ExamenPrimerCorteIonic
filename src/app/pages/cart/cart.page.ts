import { Component } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone:false
})
export class CartPage {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ionViewWillEnter() {
    this.cartItems = this.cartService.getCart();
  }
}
