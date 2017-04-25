import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppComponent } from './app.component';
import { AuthComponent, AuthRegisterComponent } from './components/auth/auth.component';
import { BookListComponent } from './components/book/book-list.component';
import { BookDetailComponent } from './components/book/book-detail.component';
import { ReviewListComponent } from './components/book/review-list.component';

import { AuthorizationService } from './services/authorization.service';
import { BookService } from './services/book.service';

import { MaterialModule } from '@angular/material';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AuthRegisterComponent,
    BookListComponent,
    BookDetailComponent,
    NavbarComponent,
    ReviewListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: 'book/:id', component: BookDetailComponent },
      { path: 'books', component: BookListComponent },
      { path: '', redirectTo: 'books', pathMatch: 'full'},
      { path: '**', redirectTo: 'books', pathMatch: 'full'},      
    ])
  ],
  entryComponents: [AuthComponent, AuthRegisterComponent],
  providers: [AuthorizationService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
