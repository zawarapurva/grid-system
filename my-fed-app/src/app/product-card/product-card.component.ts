import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  productCards;
  constructor(
    private productCard: ProductService
  ) { }

  ngOnInit() {
    this.productCard.getCatalogueProducts().subscribe(res => {
      this.productCards = res;
      console.log(res);
    });
  }
}
