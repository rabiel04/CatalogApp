import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../services/products.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products!:Array<Product>;
  errorMessage!: string ;

  constructor(private productService:ProductsService) {

  }

  ngOnInit(): void {
    this.handleGetAllProducts();
  }

  handleGetAllProducts(){
    this.productService.getAllProducts().subscribe(
      (data)=>{
        this.products=data;
      },
      (err)=>{
        this.errorMessage=err;
      }
    );
  }

  handleDeleteProduct(p: Product) {
    let conf=confirm("est vous sure ?");
    if(!conf) return;
    this.productService.deleteProduct(p.id).subscribe(
      data=>{
        let index = this.products.indexOf(p);
        this.products.splice(index,1);
      }
    );
  }
}
