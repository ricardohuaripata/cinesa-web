import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { CinesComponent } from './pages/cines/cines.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { ExperienciasComponent } from './pages/experiencias/experiencias.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Cartelera, horarios y compra | Cinesa',
  },
  {
    path: 'cines',
    component: CinesComponent,
    title: 'Todos los cines | Cinesa',
  },
  {
    path: 'peliculas',
    component: PeliculasComponent,
    title: 'Cartelera de películas, estrenos y ventas anticipadas | Cinesa',
  },
  {
    path: 'promociones',
    component: PromocionesComponent,
    title: 'Ofertas, promociones, concursos y sorteos | Cinesa',
  },
  {
    path: 'experiencias',
    component: ExperienciasComponent,
    title: 'Salas premium, productos de bar, Cinesa LUXE y más | Cinesa',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
