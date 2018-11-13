import { Injectable } from '@angular/core';
import { Noticia } from './noticia.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, map, tap, concat, mergeMap, concatMap, concatAll, take } from 'rxjs/operators';
import { Database } from './database.model';
import { forkJoin, from, of } from 'rxjs';
import { AutoresService } from './autores.service';
import { AutenticacaoService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ResumoService {
  API_URL = 'http://localhost:8000/api/noticias/';
  constructor(private http: HttpClient, private autores: AutoresService) { }
  
}
