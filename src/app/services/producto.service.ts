import { Injectable } from '@angular/core';
import {productos} from '../productos/productos'

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  get allProductos(){
    return productos;
  }
}
