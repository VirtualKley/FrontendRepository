import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  myAppUrl = 'https://localhost:44369/';
  myApiUrl = 'api/Categoria/';
  lista: Categoria[] = [];

  constructor(private http: HttpClient) { }

  public getCategoria()
  {
    return this.http.get(this.myAppUrl + this.myApiUrl).toPromise().then(res => {
      this.lista = res as Categoria[];
    });
  }

  public deleteCategoria(id: number): Observable<Categoria>
  {
    return this.http.delete<Categoria>(this.myAppUrl + this.myApiUrl + id);
  }

  public postCategoria(marca: Categoria): Observable<Categoria>
  {
    return this.http.post<Categoria>(this.myAppUrl + this.myApiUrl, marca);
  }

  public putCategoria(marca: Categoria): Observable<Categoria>
  {
    return this.http.put<Categoria>(this.myAppUrl + this.myApiUrl + marca.id, marca);
  }
}
