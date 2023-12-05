import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http'
import { Observable } from 'rxjs';
import { book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseURL="{{baseUrl}}/books/:bookId";


  constructor(private httpClient:HttpClient) { }
  getbooklist():Observable<book[]>{
    return this.httpClient.get<book[]>(`${this.baseURL}`);
  }

  createbook(book:book):Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,book);
  }
  getbookById(id:number):Observable<book>{
    return this.httpClient.get<book>(`${this.baseURL}/${id}`);
  }
  updatebook(id:number,book:book):Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,book);
  }
  deletebook(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
