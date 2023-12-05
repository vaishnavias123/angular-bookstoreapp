import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl:'./book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  'books':book[];

  constructor(private bookService:BookService,
    private router:Router) { }

  ngOnInit(): void {
    this.getbooks();
  }
  private getbooks(){
    this.bookService.getbooklist().subscribe(data=>{
      this.books=data;
    });
  }
  bookDetails(id:number){
    this.router.navigate(['book-details',id]);
  }
  updatebook(id:number){
    this.router.navigate(['update-book',id]);
  }
  deletebook(id:number){
    this.bookService.deletebook(id).subscribe(data =>{
      console.log(data);
      this.getbooks();
    })
  }

}
