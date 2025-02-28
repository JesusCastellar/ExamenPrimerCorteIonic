import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone:false
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  stars: number[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.stars = Array(Math.round(this.product.rating.rate)).fill(0);
  }

  viewDetails() {
    this.router.navigate(['/product-details', this.product.id]);
  }
}
