import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  paginas: any[] = [
    {
      nombre: 'Cines',
      ruta: '/cines',
    },
    {
      nombre: 'Películas',
      ruta: '/peliculas',
    },
    {
      nombre: 'Promociones',
      ruta: '/promociones',
    },
    {
      nombre: 'Experiencias',
      ruta: '/experiencias',
    },
    {
      nombre: 'Programas',
      ruta: '/programas',
    },
  ];
}
