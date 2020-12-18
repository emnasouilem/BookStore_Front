import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Book } from '../book';
import { LignePanier } from '../ligne-panier';
import { Panier } from '../panier';
import { LignePanierService } from '../services/ligne-panier.service';
import { PanierService } from '../services/panier.service';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books!:  Observable<Array<Book>>;
  book: Book= new Book();
  lines!:  Observable<Array<LignePanier>>;
  lignePanier : LignePanier = new LignePanier
  p:  Panier= new Panier();
achatForm!:FormGroup;
  constructor(private produitService:ProduitService,private router: Router,
    private lignepanierService:LignePanierService, private panierService:PanierService) { }

   ngOnInit(): void {
    this.achatForm = new FormGroup({
      'qte': new FormControl([Validators.required]),
      'idbook':new FormControl([Validators.required])
    })
    this.books=this.produitService.getAll();


this.panierService.addPanier(this.p ) .subscribe((panier)=>this.lines=this.lignepanierService.getAll())
   }
     
  
     delete(id:any) {
      Swal.fire({
        title: 'Are you sure ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.value) {

        this.produitService.deleteBook(id).subscribe(data => {
        
              Swal.fire('Deleted', '', 'success');
              this.books=this.produitService.getAll();
              this.router.navigate(['/books']);
              
            })
  
        } else {
          Swal.fire('Canceled', '', 'error')
        }
      })
    }
Buy(id : number  ,qte:number ){
  this.produitService.getById(id as number).subscribe((data )=> this.book=data)
this.lignepanierService.addLigne(this.lignePanier ,id ,qte as number ) .subscribe((line)=>this.lines=this.lignepanierService.getAll())

 
} 

}
