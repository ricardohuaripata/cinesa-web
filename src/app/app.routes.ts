import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { CinesComponent } from './pages/cines/cines.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'peliculas',
    component: PeliculasComponent,
  },
  {
    path: 'cines',
    component: CinesComponent,
  },
  {
    path: 'promociones',
    component: PromocionesComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
