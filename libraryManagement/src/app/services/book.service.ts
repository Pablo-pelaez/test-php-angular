import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://localhost/test-php-angular/libraryAPI/index.php'

  //private http = inject(HttpClient)

  constructor(private http: HttpClient) { }
  //constructor() {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl)
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}?id=${id}`)
  }

  //personal changes in Observable<Book> to Observable<any> and post<> to post<Book>
  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book)
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}?id=${book.id}`, book)
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}?id=${id}`)
  }
}
