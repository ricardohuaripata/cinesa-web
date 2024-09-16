import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Inject,
  OnInit,
  Output,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { Pelicula } from '../../interfaces/pelicula';

@Component({
  selector: 'app-top-peliculas',
  standalone: true,
  imports: [],
  templateUrl: './top-peliculas.component.html',
  styleUrl: './top-peliculas.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TopPeliculasComponent implements OnInit {
  swiperElement = signal<SwiperContainer | null>(null);
  @Output() trailerSeleccionado = new EventEmitter<string>(); // Evento que emite la URL del trailer
  peliculas: Pelicula[] = [
    {
      titulo: 'DEADPOOL Y LOBEZNO',
      imagen: 'images/deadpool3.jpg',
      trailer:
        'https://res.cloudinary.com/dmravgyts/video/upload/v1726444315/Bitelch%C3%BAs_Bitelch%C3%BAs___Tr%C3%A1iler_Oficial_2_1080p_h264_youtube_pwhs6n.mp4',
    },
    {
      titulo: 'BITELCHÚS',
      imagen: 'images/bitelchus.jpg',
      trailer:
        'https://res.cloudinary.com/dmravgyts/video/upload/v1726444315/Bitelch%C3%BAs_Bitelch%C3%BAs___Tr%C3%A1iler_Oficial_2_1080p_h264_youtube_pwhs6n.mp4',
    },
    {
      titulo: 'WICKED',
      imagen: 'images/wicked.jpg',
      trailer:
        'https://res.cloudinary.com/dmravgyts/video/upload/v1726444315/Bitelch%C3%BAs_Bitelch%C3%BAs___Tr%C3%A1iler_Oficial_2_1080p_h264_youtube_pwhs6n.mp4',
    },
    {
      titulo: 'TRANSFORMERS ONE',
      imagen: 'images/transformers.jpg',
      trailer:
        'https://res.cloudinary.com/dmravgyts/video/upload/v1726444315/Bitelch%C3%BAs_Bitelch%C3%BAs___Tr%C3%A1iler_Oficial_2_1080p_h264_youtube_pwhs6n.mp4',
    },
    {
      titulo: 'JOKER: FOLIE A DEUX',
      imagen: 'images/joker-2.jpg',
      trailer:
        'https://res.cloudinary.com/dmravgyts/video/upload/v1726444315/Bitelch%C3%BAs_Bitelch%C3%BAs___Tr%C3%A1iler_Oficial_2_1080p_h264_youtube_pwhs6n.mp4',
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Verificar si estamos en el navegador (cliente)
    if (isPlatformBrowser(this.platformId)) {
      const swiperElemConstructor = document.querySelector(
        '#top-peliculas-swiper'
      );
      const swiperOptions: SwiperOptions = {
        slidesPerView: 2,
        loop: true,
        autoplay: {
          delay: 1500,
        },
        spaceBetween: 40,
        grabCursor: true,
        breakpoints: {
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        },
      };

      if (swiperElemConstructor) {
        Object.assign(swiperElemConstructor, swiperOptions);
        this.swiperElement.set(swiperElemConstructor as SwiperContainer);
        this.swiperElement()?.initialize();
      }
    }
  }

  seleccionarTrailer(trailerUrl: string) {
    this.trailerSeleccionado.emit(trailerUrl); // Emitir la URL del trailer
  }
}
