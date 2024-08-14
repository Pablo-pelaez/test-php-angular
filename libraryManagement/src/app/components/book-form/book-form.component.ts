import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {

  book: Book = new Book()

  constructor(private bookService: BookService, private router: Router) { }

  onSubmit(): void {
    this.bookService.addBook(this.book).subscribe(() => {
      this.router.navigate(['/'])
    })
  }

}
