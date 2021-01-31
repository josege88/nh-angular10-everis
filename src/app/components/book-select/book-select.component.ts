import { Component, OnInit, Input } from '@angular/core';
import { IBook } from '../book';

@Component({
  selector: 'app-book-select',
  templateUrl: './book-select.component.html',
  styleUrls: ['./book-select.component.scss']
})
export class BookSelectComponent implements OnInit {
  @Input() nameBooks: string;
  @Input() numeroRepeticiones: number;
  
  constructor() { }

  ngOnInit(): void {
this.nameBooks = '';

  }

}
