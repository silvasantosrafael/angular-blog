import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.responsive.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  cardId: string = "0"
  @Input()
  cardPhotoCover: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  cardLink: string = '';
  @Input()
  cardDate: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
