import { Component, Input, OnInit } from '@angular/core';
import { dataMock } from 'src/app/data/dataMock';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts = dataMock;

  constructor() {
  }

  ngOnInit(): void {
  }

}
