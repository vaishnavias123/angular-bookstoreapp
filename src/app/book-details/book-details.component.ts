import { Component, OnInit } from '@angular/core';
import { book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  'id':number
  'book':book
  constructor(private route:ActivatedRoute,private bookService:BookService){ }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.book=new book();
    this.bookService.getbookById(this.id).subscribe(data=>{
      this.book=data;
    })
  }

}
