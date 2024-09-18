import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-experiencias',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './experiencias.component.html',
  styleUrl: './experiencias.component.scss',
})
export class ExperienciasComponent {
  salas: any[] = [
    {
      nombre: 'ISENSE',
      descripcion:
        'El sonido envolvente de estas salas, una pantalla extragrande, proyector full HD y sus butacas XXL te harán sentir más parte de la película que nunca.',
      enlace: '/',
      imagen:
        'https://www.cinesa.es/media/t0ufh3g5/sala-premium-isense-cinesa.jpg',
    },
    {
      nombre: 'IMAX',
      descripcion:
        'En IMAX, desde la película hasta la tecnología y el diseño de las salas se han desarrollado y adaptado para hacerte creer que eres uno de los protagonistas.',
      enlace: '/',
      imagen:
        'https://www.cinesa.es/media/hozfkyqf/conoce-sala-imax-en-cinesa.jpg',
    },
    {
      nombre: 'Sala XL',
      descripcion:
        'Las novedosas salas XL son las de más grandes dimensiones del cine, donde podrás disfrutar de las películas como si fueras el protagonista.',
      enlace: '/',
      imagen: 'https://www.cinesa.es/media/1jnfpr1h/xl_1024x420.jpg',
    },
    {
      nombre: 'SCREEN X',
      descripcion:
        'La primera plataforma cinematográfica inmersiva que ofrece a los espectadores una experiencia de visualización de 270 grados.',
      enlace: '/',
      imagen: 'https://www.cinesa.es/media/vetbkgfh/cinesa-sala-screenx.jpg',
    },
    {
      nombre: 'DBOX',
      descripcion:
        'Prepárate para sentir nuevas emociones y déjate llevar por la inmersión y el movimiento de las butacas DBOX. Una experiencia única.',
      enlace: '/',
      imagen:
        'https://www.cinesa.es/media/iushzgud/descubre-sala-dbox-en-cinesa.jpg',
    },
  ];
}
