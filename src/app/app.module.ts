import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/shared/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { HotelesComponent } from './components/hoteles/hoteles.component';
import { HotelComponent } from './components/hotel/hotel.component';

import {APP_ROUTING} from './app.routes';
import { MapasComponent } from './components/mapas/mapas.component';

import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { MapasService } from './services/mapas.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent,
    HomeComponent,
    ListComponent,
    HotelesComponent,
    HotelComponent,
    MapasComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
      FormsModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyB31xqM3rRG-J8xwo32Fi7Z9KKEJY5QILs'
      })
  ],
  providers: [
      MapasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
