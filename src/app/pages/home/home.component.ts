import { Component, OnInit } from '@angular/core';
import { dataMock } from 'src/app/data/dataMock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsive.component.css']
})
export class HomeComponent implements OnInit {

  posts = dataMock;

  constructor() { }

  ngOnInit(): void {
  }

}
