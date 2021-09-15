import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  myAppUrl = 'https://localhost:44369/';
  myApiUrl = 'api/Producto/';
  productos: Producto[] = [];
  producto?: Producto;

  constructor(private http: HttpClient) { }

  public getProducto(): Promise<any>
  {
    return this.http.get(this.myAppUrl + this.myApiUrl).toPromise().then(res => {
      this.productos = res as Producto[];
    });
  }

  public postProducto(producto: Producto): Observable<Producto>
  {
    return this.http.post<Producto>(this.myAppUrl + this.myApiUrl, producto);
  }

  public gProducto(id: number): Observable<Producto>
  {
    return this.http.get<Producto>(this.myAppUrl + this.myApiUrl + id);
  }

  public putProducto(id: number, producto: Producto): Observable<Producto>
  {
    return this.http.put<Producto>(this.myAppUrl + this.myApiUrl + id, producto);
  }

  public deleteProducto(id: number): Observable<Producto>
  {
    return this.http.delete<Producto>(this.myAppUrl + this.myApiUrl + id);
  }

}
