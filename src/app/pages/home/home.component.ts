import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone:false
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  categories: string[] = [];
  selectedCategory: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getAllProducts();
    this.getCategories();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  getCategories() {
    this.productService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;
    if (this.selectedCategory === '') {
      this.getAllProducts();
    } else {
      this.productService.getProductsByCategory(this.selectedCategory).subscribe((data) => {
        this.products = data;
      });
    }
  }
}
