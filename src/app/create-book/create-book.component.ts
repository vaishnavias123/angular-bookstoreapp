import { Component, OnInit } from '@angular/core';
import { book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { error } from 'console';


@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  book:book=new book();

  constructor(private bookService:BookService,
    private router:Router) { }

  ngOnInit(): void {
  }
  savebook():void{
    this.bookService.createbook(this.book).subscribe(
      (data:any)=>{
        console.log('book saved successfully:',data);
        this.goTobooklist();
      },
      (error:any)=>{
        console.error('error while saving book:',error);
      }
    );
  }
  goTobooklist():void{
    this.router.navigate(['/books']);
  }
  onFormSubmit(){
    console.log(this.book);
    this.savebook();
   this.router.navigate(['/book-list']);
  }
 generatedId:number=0;
 generateId():void{
  this.generatedId++;
 }
  
  
  
  

}