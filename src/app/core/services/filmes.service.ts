import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FilmesService {
  constructor(private http: HttpClient) {}

  listarDados() {
    return this.http.get('/assets/database/filmes.json');
  }
}
