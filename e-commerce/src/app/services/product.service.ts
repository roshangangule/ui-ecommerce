import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';


@Injectable()
export class ProductService {

  private baseURL = 'http://localhost:8080/api/products';

  constructor(public http:HttpClient) { }

  getProductList() {
    return this.http.get(this.baseURL);
  }

}
