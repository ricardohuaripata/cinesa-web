import { Component } from '@angular/core';
import { TopPeliculasComponent } from "../../components/top-peliculas/top-peliculas.component";
import { TodasPeliculasComponent } from "../../components/todas-peliculas/todas-peliculas.component";
import { BannerComponent } from "../../components/banner/banner.component";

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [TopPeliculasComponent, TodasPeliculasComponent, BannerComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.scss'
})
export class PeliculasComponent {

}
