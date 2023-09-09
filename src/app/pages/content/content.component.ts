import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataMock } from 'src/app/data/dataMock';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  cardPhotoCover: string = '';
  @Input()
  cardDate: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  cardDescription: string = '';
  private id: string | null = '0';

  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get('id'))
    this.valuesToComponent(this.id)
  }

  valuesToComponent(id: string | null) {
    const data = dataMock.filter(post => post.id === id)[0];
    if (data != null) {
      this.cardPhotoCover = data.photo;
      this.cardDate = data.date;
      this.cardTitle = data.title;
      this.cardDescription = data.description;
    }
  }

}
