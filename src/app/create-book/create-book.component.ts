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
  savebook(){
    this.bookService.createbook(this.book).subscribe(data=>{
      console.log(data);
      this.goTobooklist();
    },
    error=>console.log(error));
  }
  goTobooklist(){
    this.router.navigate(['/books']);
  }
  formsubmit(){
   console.log('form submited');
    console.log(this.book);
    this.savebook();
  }
  randomnumber :number=0;
  generateRandomNumber(){
    this.bookService.createbook(this.book).subscribe(data=>{
      
     this.randomnumber=Math.floor(Math.random()*100)+1;
     console.log(this.book);
    },error=>console.log(error));
     

  }
  
  
  

}
