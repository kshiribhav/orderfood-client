import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components';
import { FormsModule } from '@angular/forms';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { AddfooditemComponent } from './components/addfooditem/addfooditem.component';
import { AddreviewComponent } from './components/addreview/addreview.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,    
    AddRestaurantComponent, AddfooditemComponent, AddreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
