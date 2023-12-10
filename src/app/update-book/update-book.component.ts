
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { book } from '../book';
import { ActivatedRoute,Router } from '@angular/router';
import { error } from 'console';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {
  'id':number;
  book:book=new book();
  constructor(private bookService:BookService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.bookService.getbookById(this.id).subscribe(data=>{
      this.book=data;
    },error=>console.log(error));
  }
  onFormsubmit(){
    this.bookService.updatebook(this.id,this.book).subscribe(data=>{
      this.goTobooklist();
    },error=>console.log(error));
  }
  goTobooklist(){
    this.router.navigate(['/books']);
  }

}