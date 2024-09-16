import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodasPeliculasComponent } from './components/todas-peliculas/todas-peliculas.component';
import { TopPeliculasComponent } from './components/top-peliculas/top-peliculas.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { BannerComponent } from './components/banner/banner.component';
import { initFlowbite } from 'flowbite';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    LoginComponent,
    TopPeliculasComponent,
    TodasPeliculasComponent,
    VideoPlayerComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  trailer: string = '';

  ngOnInit(): void {
    initFlowbite();
  }

  actualizarTrailer(url: string) {
    this.trailer = url; // Actualiza la URL del trailer
  }
  cerrarVideoModal() {
    this.trailer = ''; // Limpiar la URL del trailer
  }
}
