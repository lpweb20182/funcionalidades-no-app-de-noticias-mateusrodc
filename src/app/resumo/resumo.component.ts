import { Component, OnInit } from '@angular/core';
import { ResumoService } from '../resumo.service';
import { NoticiasService } from '../noticias.service';
import { AutoresService } from '../autores.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit {
  noticia=null;
  n=null;
  lista_erro=null;
  aut=null;
  constructor(private resumo: ResumoService,private noticias: NoticiasService,private autor: AutoresService) { }

  ngOnInit() {
    this.noticia = this.noticias.publicadas()
    .pipe(
      catchError((error) => {
        console.error('erro ao carregar dados da notícia', error);
        this.lista_erro = true;
        return of();
      })
    );
    this.aut = this.autor.todos();
    this.n = this.noticias.todas();

  }

}
