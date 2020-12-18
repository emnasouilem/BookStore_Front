import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [{
  path: '',
  component: BooksComponent,
  },
   {path: 'books',
  component: BooksComponent},
  {path: 'add',
  component: AddBookComponent},
  {path: 'panier',
  component: PanierComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
