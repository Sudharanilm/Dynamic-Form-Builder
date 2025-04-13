import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component'; // AppComponent is standalone
import { FormBuilderComponent } from './form-builder/form-builder.component'; // Import FormBuilderComponent

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormBuilderComponent
  ],
  bootstrap: [AppComponent] // Bootstrapping AppComponent
})
export class AppModule { }
