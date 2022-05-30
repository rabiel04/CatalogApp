import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products!:Array<any>;
  errorMessage!: string ;

  constructor(private productService:ProductsService) {

  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
   (data)=>{
         this.products=data;
    },
    (err)=>{
      this.errorMessage=err;
    }
    );

  }

  handleDeleteProduct(p: any) {
    let index = this.products.indexOf(p);
    this.products.splice(index,1)
  }
}
