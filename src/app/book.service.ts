import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http'
import { Observable } from 'rxjs';
import { book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl="https://bookstore.postqode.io";


  constructor(private httpClient:HttpClient) { }
  getbooklist():Observable<book[]>{
    return this.httpClient.get<book[]>(`${this.baseUrl}`);
  }

  createbook(book:book):Observable<object>{
    return this.httpClient.post(`${this.baseUrl}`,book);
  }
  getbookById(id:number):Observable<book>{
    return this.httpClient.get<book>(`${this.baseUrl}/${id}`);
  }
  updatebook(id:number,book:book):Observable<object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,book);
  }
  deletebook(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
