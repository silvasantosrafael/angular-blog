import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  cardPhotoCover: string = 'https://www.topgadget.com.br/wp-content/uploads/2022/02/Windows-11-Paint.png';
  @Input()
  cardTitle: string = 'Paint do Windows 11';
  @Input()
  cardDescription: string = 'O paint do windows 11 foi remodelado';

  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => console.log(value))
  }

}
