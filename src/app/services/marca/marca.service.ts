import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from 'src/app/models/Marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  myAppUrl = 'https://localhost:44369/';
  myApiUrl = 'api/Marca/';
  lista: Marca[] = [];

  constructor(private http: HttpClient) { }

  public getMarca()
  {
    return this.http.get(this.myAppUrl + this.myApiUrl).toPromise().then(res => {
      this.lista = res as Marca[];
    });
  }

  public deleteMarca(id: number): Observable<Marca>
  {
    return this.http.delete<Marca>(this.myAppUrl + this.myApiUrl + id);
  }

  public postMarca(marca: Marca): Observable<Marca>
  {
    return this.http.post<Marca>(this.myAppUrl + this.myApiUrl, marca);
  }

  public putMarca(marca: Marca): Observable<Marca>
  {
    return this.http.put<Marca>(this.myAppUrl + this.myApiUrl + marca.id, marca);
  }
}
