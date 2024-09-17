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
  promociones: any[] = [
    {
      titulo: '¿Quieres ganar un viaje a Londres para el estreno internacional de Wicked?',
      descripcion: 'Te damos la posibilidad de viajar a Londres con la persona que elijas, del 17 al 18 de noviembre, para participar en una sesión exclusiva, con alfombra roja.',
      finalizacion: 'El sorteo termina el: 18/09/2024',
      imagen: 'https://www.cinesa.es/media/5ezhths3/02_website_800x400_es_no-copy_wicked.jpg?width=370&height=184&v=1dafd26e30410d0',
      enlace: '/'
    },
    {
      titulo: '¡Solo apto para auténticos fans del miedo!',
      descripcion: 'Participa en el sorteo con "No hables con extraños" y podrás conseguir una experiencia de escape room si eres del programa Terror y Suspense de myCINESA.',
      finalizacion: 'El sorteo termina el: 29/09/2024',
      imagen: 'https://www.cinesa.es/media/s10jtw2s/banner-oferta-1-tys-sept.png?width=370&height=184&v=1db04ec2a5ea400',
      enlace: '/'
    },
    {
      titulo: '¡Consigue un año de cine con Joker: Folie à Deux!',
      descripcion: 'Participa en el sorteo con "Joker: Folie à Deux" y podrás conseguir una suscripción anual UNLIMITED LUXE.',
      finalizacion: 'El sorteo termina el: 06/10/2024',
      imagen: 'https://www.cinesa.es/media/o0ld0xx4/02_website_800x400_es_no-copy-v2.jpg?width=370&height=184&v=1daff8957990720',
      enlace: '/'
    }
  ]

}
