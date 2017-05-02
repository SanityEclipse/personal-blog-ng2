import { Component, OnInit, Injectable } from '@angular/core';

import { Entry } from '../entry';
import { EntryService } from '../entry.service';


@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.css'],
  providers: [EntryService]
})
export class BlogEntryComponent implements OnInit {

  entries: Entry[];

  constructor(private entryService: EntryService) { }

  getEntries(): void {
    this.entryService.getEntries()
    .then(entries => this.entries= entries)
  }

  ngOnInit(): void {
    this.getEntries(); 
  }

}
