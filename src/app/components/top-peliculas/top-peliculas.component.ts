import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
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
  peliculas: Pelicula[] = [
    {
      titulo: 'DEADPOOL Y LOBEZNO',
      imagen: 'images/deadpool3.jpg',
      trailer: 'https://www.youtube.com/watch?v=rrgsj6S0_4A',
    },
    {
      titulo: 'BITELCHÚS',
      imagen: 'images/bitelchus.jpg',
      trailer: 'https://www.youtube.com/watch?v=9SzBZZhN0fQ',
    },
    {
      titulo: 'WICKED',
      imagen: 'images/wicked.jpg',
      trailer: 'https://www.youtube.com/watch?v=UNHQgy3jawI',
    },
    {
      titulo: 'TRANSFORMERS ONE',
      imagen: 'images/transformers.jpg',
      trailer: 'https://www.youtube.com/watch?v=tc65fp8aGS8',
    },
    {
      titulo: 'JOKER: FOLIE A DEUX',
      imagen: 'images/joker-2.jpg',
      trailer: 'https://www.youtube.com/watch?v=QtZPjL_CbQI&t',
    },
  ];

  constructor() {}

  ngOnInit(): void {
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
