import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppComponent } from './app.component';
import { AuthComponent, AuthRegisterComponent } from './components/auth/auth.component';

import { AuthorizationService } from './services/authorization.service';

import { MaterialModule } from '@angular/material';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AuthRegisterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
  ],
  entryComponents: [AuthComponent, AuthRegisterComponent],
  providers: [AuthorizationService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
