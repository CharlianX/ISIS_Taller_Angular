import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Usamos la forma recomendada moderna

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SeriesModule } from './series/series-module'; 

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SeriesModule
    // Eliminamos HttpClientModule de aquí
  ],
  providers: [
    provideHttpClient(withFetch()) 
  ],
  bootstrap: [App]
})
export class AppModule { }


