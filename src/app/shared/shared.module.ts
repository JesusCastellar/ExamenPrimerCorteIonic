import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    ProductCardComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  providers: [
    CartService 
  ],
  exports: [
    ProductCardComponent,
    CartItemComponent,
    CommonModule,
    IonicModule
  ]
})
export class SharedModule {}

