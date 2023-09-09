import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.responsive.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  cardPhotoCover: string = '';
  cardTitle: string = 'Paint do Windows 11 pode ganhar ferramenta para remover fundo de imagens';
  cardDescription: string = 'Atualização liberada para Windows Insiders traz recurso que identifica automaticamente assunto da imagem e apaga o resto com apenas um clique';
  cardLink: string = 'https://tecnoblog.net/noticias/2023/09/08/paint-do-windows-11-pode-ganhar-ferramenta-para-remover-fundo-de-imagens/';
  cardDate: string = this.setCardDate();

  constructor() { }

  setCardDate(): string {

    let date: Date = new Date();

    this.cardDate = date.toLocaleDateString();

    return this.cardDate;
  }

  ngOnInit(): void {
    console.log(this.cardDate)
  }

}
