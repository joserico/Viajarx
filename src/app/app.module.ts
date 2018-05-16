import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/shared/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { HotelesComponent } from './components/hoteles/hoteles.component';
import { HotelComponent } from './components/hotel/hotel.component';
import {APP_ROUTING} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent,
    HomeComponent,
    ListComponent,
    HotelesComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
