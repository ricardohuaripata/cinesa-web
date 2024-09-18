import { Component } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula';

@Component({
  selector: 'app-todas-peliculas',
  standalone: true,
  imports: [],
  templateUrl: './todas-peliculas.component.html',
  styleUrl: './todas-peliculas.component.scss',
})
export class TodasPeliculasComponent {
  peliculas: Pelicula[] = [
    {
      titulo: 'TOPURIA. MATADOR',
      imagen: 'images/topuria.jpg',
      trailer: 'https://www.youtube.com/watch?v=6wPFn8BMB04',
    },
    {
      titulo: 'SPIDER-MAN: NO HAY HOME',
      imagen: 'images/spider-man-no-way-home.jpg',
      trailer: 'https://www.youtube.com/watch?v=ldMn-1iQzKE',
    },
    {
      titulo: 'WICKED',
      imagen: 'images/wicked.jpg',
      trailer: 'https://www.youtube.com/watch?v=UNHQgy3jawI',
    },
    {
      titulo: 'ALIEN: ROMULUS',
      imagen: 'images/alien-romulus.jpg',
      trailer: 'https://www.youtube.com/watch?v=5nWH2Pd-x-c',
    },
    {
      titulo: 'GRU 4 MI VILLANO FAVORITO',
      imagen: 'images/gru-4.jpg',
      trailer: 'https://www.youtube.com/watch?v=ulPKDcGwxUg',
    },
    {
      titulo: 'JOKER: FOLIE A DEUX',
      imagen: 'images/joker-2.jpg',
      trailer: 'https://www.youtube.com/watch?v=QtZPjL_CbQI&t',
    },
    {
      titulo: 'DEL REVES 2',
      imagen: 'images/del-reves-2.jpg',
      trailer: 'https://www.youtube.com/watch?v=ahogVfXzqs4',
    },
    {
      titulo: 'BITELCHÚS',
      imagen: 'images/bitelchus.jpg',
      trailer: 'https://www.youtube.com/watch?v=9SzBZZhN0fQ',
    },
    {
      titulo: 'DEADPOOL Y LOBEZNO',
      imagen: 'images/deadpool3.jpg',
      trailer: 'https://www.youtube.com/watch?v=rrgsj6S0_4A',
    },
    {
      titulo: 'GLADIATOR 2',
      imagen: 'images/gladiator-2.jpg',
      trailer: 'https://www.youtube.com/watch?v=HCjuv9STNps',
    },
    {
      titulo: 'SMILE 2',
      imagen: 'images/smile-2.jpg',
      trailer: 'https://www.youtube.com/watch?v=69GcScd6sGk',
    },
    {
      titulo: 'TRANSFORMERS ONE',
      imagen: 'images/transformers.jpg',
      trailer: 'https://www.youtube.com/watch?v=tc65fp8aGS8',
    },
  ];
}
