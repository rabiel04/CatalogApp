import { Injectable } from '@angular/core';
import {Observable, of, throwError, throwIfEmpty} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
products! :Array<Product>
  constructor() {
    this.products=[
      {id:1, name:"Computer",price:6500,promotion:true},
      {id:2, name:"Printer",price:150,promotion:false},
      {id:3, name:"Smart Phone",price:500,promotion:true}]
  }

  public getAllProducts() :Observable<Array<Product>>{
  let rnd= Math.random()
    if(rnd<0.1)
      return throwError(()=>("Probleme de Connextion !!!"));
    else
      return of(this.products);
  }
  public deleteProduct(id :number) : Observable<boolean>{
     this.products=this.products.filter(p=>p.id!=id)
    return of(true)
  }

}
