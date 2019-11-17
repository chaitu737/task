import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';


import {
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatMenuModule
  
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewnoteComponent } from './components/viewnote/viewnote.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    ViewnoteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
    
    MatInputModule,
  
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
