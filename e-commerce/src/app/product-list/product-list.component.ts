import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.listOfProduct();
  }
  listOfProduct(): any {
    this.service.getProductList().subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
