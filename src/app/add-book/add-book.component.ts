import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../book';
import { ProduitService } from '../services/produit.service';

import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
 book: Book= new Book();
  constructor(private produitService:ProduitService,private router: Router) {
  
   }
  productForm!: FormGroup;
  ngOnInit(): void {
   this.productForm = new FormGroup({
      'ref': new FormControl([Validators.required]),
      'auteur': new FormControl([Validators.required]),
      'title': new FormControl([Validators.required]),
      'date': new FormControl([Validators.required]),
      'qte': new FormControl([Validators.required]),
      'description': new FormControl([Validators.required]),
      'prix': new FormControl([Validators.required]),

    })
     }
  save() {
 
      console.log(this.book);
      this.produitService.createBook(this.book).subscribe(data => {
          console.log(data);
          Swal.fire('Saved !', 'message', 'success');
          this.router.navigate(['/books'])
        }  )
    }
    


}
