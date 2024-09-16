import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BannerComponent implements OnInit {
  swiperElement = signal<SwiperContainer | null>(null);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Verificar si estamos en el navegador (cliente)
    if (isPlatformBrowser(this.platformId)) {
      const swiperElemConstructor = document.querySelector('#banner-swiper');
      const swiperOptions: SwiperOptions = {
        slidesPerView: 1,
        pagination: true,
        loop: true,
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
}
