import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  protected name = 'Clean Code';
  protected author = 'Rober C';

  protected books = [
    {
      name: 'Clean Code',
      author: 'Rober C',
      image: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
    },
  ];
}
