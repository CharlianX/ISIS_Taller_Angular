import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SeriesModule } from './series/series-module'; 

// app-module.ts
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SeriesModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }