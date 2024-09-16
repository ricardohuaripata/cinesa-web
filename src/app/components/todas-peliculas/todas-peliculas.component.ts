import { Component, EventEmitter, Output } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula';

@Component({
  selector: 'app-todas-peliculas',
  standalone: true,
  imports: [],
  templateUrl: './todas-peliculas.component.html',
  styleUrl: './todas-peliculas.component.scss',
})
export class TodasPeliculasComponent {
  @Output() trailerSeleccionado = new EventEmitter<string>(); // Evento que emite la URL del trailer

  peliculas: Pelicula[] = [
    {
      titulo: 'TOPURIA. MATADOR',
      imagen: 'images/topuria.jpg',
      trailer:
        'https://res.cloudinary.com/dmravgyts/video/upload/v1726444315/Bitelch%C3%BAs_Bitelch%C3%BAs___Tr%C3%A1iler_Oficial_2_1080p_h264_youtube_pwhs6n.mp4',
    },
    {
      titulo: 'SPIDER-MAN: NO HAY HOME',
      imagen: 'images/spider-man-no-way-home.jpg',
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
      titulo: 'ALIEN: ROMULUS',
      imagen: 'images/alien-romulus.jpg',
      trailer:
        'https://res.cloudinary.com/dmravgyts/video/upload/v1726444315/Bitelch%C3%BAs_Bitelch%C3%BAs___Tr%C3%A1iler_Oficial_2_1080p_h264_youtube_pwhs6n.mp4',
    },
    {
      titulo: 'GRU 4 MI VILLANO FAVORITO',
      imagen: 'images/gru-4.jpg',
      trailer:
        'https://res.cloudinary.com/dmravgyts/video/upload/v1726444315/Bitelch%C3%BAs_Bitelch%C3%BAs___Tr%C3%A1iler_Oficial_2_1080p_h264_youtube_pwhs6n.mp4',
    },
    {
      titulo: 'JOKER: FOLIE A DEUX',
      imagen: 'images/joker-2.jpg',
      trailer:
        'https://res.cloudinary.com/dmravgyts/video/upload/v1726444315/Bitelch%C3%BAs_Bitelch%C3%BAs___Tr%C3%A1iler_Oficial_2_1080p_h264_youtube_pwhs6n.mp4',
    },
    {
      titulo: 'DEL REVES 2',
      imagen: 'images/del-reves-2.jpg',
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
      titulo: 'DEADPOOL Y LOBEZNO',
      imagen: 'images/deadpool3.jpg',
      trailer:
        'https://res.cloudinary.com/dmravgyts/video/upload/v1726444315/Bitelch%C3%BAs_Bitelch%C3%BAs___Tr%C3%A1iler_Oficial_2_1080p_h264_youtube_pwhs6n.mp4',
    },
    {
      titulo: 'GLADIATOR 2',
      imagen: 'images/gladiator-2.jpg',
      trailer:
        'https://res.cloudinary.com/dmravgyts/video/upload/v1726444315/Bitelch%C3%BAs_Bitelch%C3%BAs___Tr%C3%A1iler_Oficial_2_1080p_h264_youtube_pwhs6n.mp4',
    },
    {
      titulo: 'SMILE 2',
      imagen: 'images/smile-2.jpg',
      trailer:
        'https://res.cloudinary.com/dmravgyts/video/upload/v1726444315/Bitelch%C3%BAs_Bitelch%C3%BAs___Tr%C3%A1iler_Oficial_2_1080p_h264_youtube_pwhs6n.mp4',
    },
    {
      titulo: 'TRANSFORMERS ONE',
      imagen: 'images/transformers.jpg',
      trailer:
        'https://res.cloudinary.com/dmravgyts/video/upload/v1726444315/Bitelch%C3%BAs_Bitelch%C3%BAs___Tr%C3%A1iler_Oficial_2_1080p_h264_youtube_pwhs6n.mp4',
    },
  ];

  seleccionarTrailer(trailerUrl: string) {
    this.trailerSeleccionado.emit(trailerUrl); // Emitir la URL del trailer
  }
}
