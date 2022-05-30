import { Injectable } from '@angular/core';
import {Observable, of, throwError, throwIfEmpty} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
products! :Array<any>
  constructor() {
    this.products=[
      {id:1, name:"Computer",price:6500},
      {id:2, name:"Printer",price:150},
      {id:3, name:"Smart Phone",price:500}]
  }

  public getAllProducts() :Observable<Array<any>>{
  let rnd= Math.random()
    if(rnd<0.5)
      return throwError(()=>("Probleme de Connextion !!!"));
    else
      return of(this.products);
  }
}
