import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Book } from '../book';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

url='http://localhost:8085/BuildStore/api/livre'
  constructor(private http : HttpClient ) { }

  getAll() : Observable<Array<Book>>{
    return this.http.get<Array<Book>>(this.url+'/getAllLivres');
  }
  getById(id:number) {
    return this.http.get(this.url+'/getLivre/'+id)
  }
  createBook(book:Book){
    return this.http.post(this.url+'/addLivre' , book)
  }
  deleteBook(id:any){
    return this.http.delete(this.url+'/deleteLivre/'+id)
  }
 
}
