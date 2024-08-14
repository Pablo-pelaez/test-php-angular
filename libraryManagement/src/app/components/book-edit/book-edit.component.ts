import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css'
})
export class BookEditComponent implements OnInit {

  book : Book = new Book()

  //Pending to add the private router: Router and private route: ActivatedRoute
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!
    this.bookService.getBook(id).subscribe((data: Book) => {
      this.book = data
    })
  }

  onSubmit(): void {
    this.bookService.updateBook(this.book).subscribe(() => {
      this.router.navigate(['/'])
    })
  }

}
