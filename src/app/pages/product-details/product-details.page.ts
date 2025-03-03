import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeStoreService, Product } from 'src/app/shared/services/fake-store.service';
//import { CartService } from 'src/app/shared/services/cart.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
  standalone: false
})
export class ProductDetailsPage implements OnInit {
  product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private fakeStoreService: FakeStoreService,
    private cartService: CartService // Inyectamos el servicio del carrito
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fakeStoreService.getProductById(id).subscribe((data) => {
        this.product = data;
      });
    }
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
      console.log('Producto agregado al carrito:', this.product);
      console.log('Carrito actual:', this.cartService.getCart());
    }
  }
}
