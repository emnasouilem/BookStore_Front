import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LignePanier } from '../ligne-panier';
import { Panier } from '../panier';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  url='http://localhost:8085/BuildStore/api/panier'
  constructor(private http : HttpClient) { }
  getAll(id:any) : Observable<Array<Panier>>{
    return this.http.get<Array<Panier>>(this.url+'/getAllPanier/'+id);
  }
  addPanier(ligne :Panier ) {
    return this.http.post(this.url+'/addPanier',ligne)
  }
 createPanier(panier : Panier){
   return this.http.post(this.url+'/addPanier',panier)
 }

}
