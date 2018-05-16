import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HotelComponent} from './components/hotel/hotel.component';
import {HotelesComponent} from './components/hoteles/hoteles.component';
import {ListComponent} from './components/list/list.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'hotel/:id', component: HotelComponent },
    { path: 'hoteles', component: HotelesComponent },
    { path: 'list/:key', component: ListComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
