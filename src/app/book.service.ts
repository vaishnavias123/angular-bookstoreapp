import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http'
import { Observable,throwError } from 'rxjs';
import { book } from './book';
import { error } from 'console';
import { catchError } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl="https://bookstore.postqode.io";


  constructor(private http:HttpClient) { }
  private handleError(error:any):Observable<never>{
    console.error('an error occured:',error);
    return throwError('something went wrong,please try again later');

  }
  
  getbooklist():Observable<book[]>{
    return this.http.get<book[]>(`${this.baseUrl}`).pipe(
      catchError(this.handleError)
    );
  }

 createbook(book:book):Observable<object>{
    return this.http.post(`${this.baseUrl}`,book).pipe(
      catchError(this.handleError)
    );
  }
  getbookById(id:number):Observable<book>{
    return this.http.get<book>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }
  updatebook(id:number,book:book):Observable<object>{
    return this.http.put(`${this.baseUrl}/${id}`,book).pipe(
      catchError(this.handleError)
    );
  }
  deletebook(id:number):Observable<object>{
    return this.http.delete(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }
 
  
  
  
  
}
