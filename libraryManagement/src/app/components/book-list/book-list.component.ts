import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {

  books: Book[] = []

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.books = data
    })
  }

  deleteBook(book: Book): void {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you really want to delete the book titled "${book.title}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.bookService.deleteBook(book.id!).subscribe(() => {
          this.books = this.books.filter(b => b.id !== book.id);
          Swal.fire(
            'Deleted!',
            'The book has been deleted.',
            'success'
          );
        });
      }
    });
  }
  // deleteBook(id: number): void {
  //   const confirmed = confirm(`Are you sure you want to delete the book?`);

  //   if (confirmed) {
  //     this.bookService.deleteBook(id).subscribe(() => {
  //       this.books = this.books.filter(book => book.id !== id)
  //     })
  //   }
  // }

}
