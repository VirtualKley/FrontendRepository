import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from 'src/app/models/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  myAppUrl = 'https://localhost:44369/';
  myApiUrl = 'api/Proveedor/';
  lista: Proveedor[] = [];

  constructor(private http: HttpClient) { }

  public getProveedor()
  {
    return this.http.get(this.myAppUrl + this.myApiUrl).toPromise().then(res => {
      this.lista = res as Proveedor[];
    });
  }

  public deleteProveedor(id: number): Observable<Proveedor>
  {
    return this.http.delete<Proveedor>(this.myAppUrl + this.myApiUrl + id);
  }

  public postProveedor(proveedor: Proveedor): Observable<Proveedor>
  {
    return this.http.post<Proveedor>(this.myAppUrl + this.myApiUrl, proveedor);
  }

  public putProveedor(proveedor: Proveedor): Observable<Proveedor>
  {
    return this.http.put<Proveedor>(this.myAppUrl + this.myApiUrl + proveedor.id, proveedor);
  }
}
