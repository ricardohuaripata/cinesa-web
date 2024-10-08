import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BannerComponent implements OnInit {
  swiperElement = signal<SwiperContainer | null>(null);
  posters: any[] = [
    {
      titulo: 'Bitelchus',
      poster:
        'https://www.cinesa.es/media/xmpjynsa/hero-banner-bitelchus.jpg?width=970&height=480&rxy=0.5%2C0.5',
    },
    {
      titulo: 'Odio el verano',
      poster:
        'https://www.cinesa.es/media/gnadli1b/banner-cinesa-1940x960-1.jpg?width=970&height=480&rxy=0.5%2C0.5',
    },
    {
      titulo: 'Joker: Folie a deux',
      poster:
        'https://www.cinesa.es/media/jgwilrfy/hero-banner-joker.jpg?width=970&height=480&rxy=0.5%2C0.5',
    },
    {
      titulo: 'Alien: Romulus',
      poster:
        'https://www.cinesa.es/media/t0vjgyxc/hero-banner-alien-romulus.jpg?width=970&height=480&rxy=0.5%2C0.5',
    },
    {
      titulo: 'Transformers one',
      poster:
        'https://www.cinesa.es/media/sfvcfkv2/hero-banner-transformers-one.jpg?width=970&height=480&rxy=0.5%2C0.5',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('#banner-swiper');
    const swiperOptions: SwiperOptions = {
      slidesPerView: 1,
      pagination: true,
      autoplay: {
        delay: 5000,
      },
    };

    if (swiperElemConstructor) {
      Object.assign(swiperElemConstructor, swiperOptions);
      this.swiperElement.set(swiperElemConstructor as SwiperContainer);
      this.swiperElement()?.initialize();
    }
  }
}
