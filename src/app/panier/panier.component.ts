import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book';
import { LignePanier } from '../ligne-panier';
import { LignePanierService } from '../services/ligne-panier.service';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
 panier!:   Observable<Array<LignePanier>>;
 displayedColumns: string[] = ['id', 'total', 'qte'];
 book: Book= new Book();
  constructor(private lignepanierService:LignePanierService,private produitService:ProduitService) { }

  ngOnInit(): void {
    this.panier=this.lignepanierService.getAll();
   
  }


}
