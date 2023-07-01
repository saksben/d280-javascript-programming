import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapboxComponent } from './mapbox/mapbox.component';
import { StatsboxComponent } from './statsbox/statsbox.component';

@NgModule({
  declarations: [
    AppComponent,
    MapboxComponent,
    StatsboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
