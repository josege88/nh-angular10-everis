import { Component, OnInit } from '@angular/core';
import { IBook } from '../book';
import { BookData } from './mock-data';

@Component({
  selector: 'app-book-list-example',
  templateUrl: './book-list-example.component.html',
  styleUrls: ['./book-list-example.component.scss']
})
export class BookListExampleComponent implements OnInit {

  books: IBook[];
  selectedBooks: IBook[];
  selectedBooks2: IBook;
  nameBook: string;
  numeroRepeticiones: number;
  constructor() { }

  ngOnInit(): void {
    this.books = this.fetchBook();
    this.selectedBooks = [];
    this.selectedBooks2 = null;
  }

  fetchBook(): IBook[] {
    return BookData;
  }

  selectBook(book: IBook): void {
    this.selectedBooks.push(book);
  }

  selectBook2(book: IBook): void {
    // this.selectedBooks2 = book;
    this.nameBook = book.name;

    let result = this.selectedBooks.filter(obj => {
      return obj.name === this.nameBook
    })

    this.numeroRepeticiones = result.length

    console.log(this.numeroRepeticiones);

}
}