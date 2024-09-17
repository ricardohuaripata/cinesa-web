import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner/banner.component";
import { TopPeliculasComponent } from "../../components/top-peliculas/top-peliculas.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, TopPeliculasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
