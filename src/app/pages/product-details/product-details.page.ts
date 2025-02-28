import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { FakeStoreService } from 'src/app/shared/services/fake-store.service';
import { FakeStoreService, Product } from 'src/app/shared/services/fake-store.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
  standalone:false
})
export class ProductDetailsPage implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private fakeStoreService: FakeStoreService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.fakeStoreService.getProductById(id).subscribe((data) => {
      this.product = data;
    });
  }
}
