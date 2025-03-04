import { Component } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: false
})
export class CartPage {
  cartItems: any[] = [];

  constructor(
    private cartService: CartService, 
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  ionViewWillEnter() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCart();
    console.log('🛒 Carrito actualizado:', this.cartItems);
  }

  async removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
    this.loadCart();
    
    const toast = await this.toastCtrl.create({
      message: '🗑️ Producto eliminado del carrito',
      duration: 2000,
      position: 'bottom',
      color: 'warning'
    });
    toast.present();
  }

  getTotal(): string {
    return this.cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  }

  async checkout() {
    if (this.cartItems.length > 0) {
      this.router.navigate(['/checkout']);
    } else {
      const toast = await this.toastCtrl.create({
        message: '⚠️ El carrito está vacío',
        duration: 2000,
        position: 'bottom',
        color: 'danger'
      });
      toast.present();
    }
  }
}
