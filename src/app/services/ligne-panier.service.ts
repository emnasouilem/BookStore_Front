import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LignePanier } from '../ligne-panier';

@Injectable({
  providedIn: 'root'
})
export class LignePanierService {
  url='http://localhost:8085/BuildStore/api/LignePanier'
  constructor(private http : HttpClient) { }
  getAll() : Observable<Array<LignePanier>>{
    return this.http.get<Array<LignePanier>>(this.url+'/getAllLignePanier');
  }
 
  addLigne(ligne :LignePanier ,id :number , qte: number): Observable<LignePanier> {
    return this.http.post(this.url+'/addLignePanier/'+id+'/'+qte,ligne)
  }


    
    

 
}
 