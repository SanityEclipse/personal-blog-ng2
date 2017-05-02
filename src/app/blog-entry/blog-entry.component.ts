import { Component, OnInit } from '@angular/core';

import { Entry } from '../entries';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.css']
})
export class BlogEntryComponent implements OnInit {

  entries = [
    new Entry('blog 1', '11/21/2012', 'blog content goes here'),
    new Entry('blog 2', '01/01/2014', 'blog content goes here'),
    new Entry('blog 3', '05/7/2017', 'blog content goes here')

  ];



  constructor() { }

  ngOnInit() {

  }

}
