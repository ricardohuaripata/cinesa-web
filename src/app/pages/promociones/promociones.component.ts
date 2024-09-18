import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-promociones',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './promociones.component.html',
  styleUrl: './promociones.component.scss',
})
export class PromocionesComponent {
  promociones: any[] = [
    {
      titulo: '¡Regala cine!',
      descripcion:
        'Tarjetas regalo para gastar tanto en entradas de cine como en menús de palomitas.',
      finalizacion:
        'Oferta disponible desde el: 15/09/2024',
      imagen:
        'https://www.cinesa.es/media/hxtp1edr/gifting-sp-preview.jpg?width=370&height=184&v=1daf86c8a9296b0',
      enlace: '/',
    },
    {
      titulo:
        'Oferta exclusiva UNLIMITED CARD: ¡Descuento de 10% en todos los productos de bar!',
      descripcion:
        'Con esta oferta especial para miembros Unlimited Card, te beneficiarás de un descuento del 10% en todos nuestros productos de bar.',
      finalizacion: 'Oferta disponible desde el: 26/01/2024',
      imagen:
        'https://www.cinesa.es/media/hpwhjwfq/unlimited-preview.jpg?width=370&height=184&v=1dabe532ff79a50',
      enlace: '/',
    },
    {
      titulo: '¡Oferta vuelta al cole!',
      descripcion:
        'Del 9 al 22 de septiembre, usa este código para comprar tu entrada:',
      finalizacion: 'La oferta termina el: 22/09/2024',
      imagen:
        'https://www.cinesa.es/media/rgtbngiy/banner-vuelta-al-cole-800x400.png?width=370&height=184&v=1dafedb8c82db90',
      enlace: '/',
    },
    {
      titulo:
        '¿Quieres ganar un viaje a Londres para el estreno internacional de Wicked?',
      descripcion:
        'Te damos la posibilidad de viajar a Londres con la persona que elijas, del 17 al 18 de noviembre, para participar en una sesión exclusiva, con alfombra roja.',
      finalizacion: 'El sorteo termina el: 18/09/2024',
      imagen:
        'https://www.cinesa.es/media/5ezhths3/02_website_800x400_es_no-copy_wicked.jpg?width=370&height=184&v=1dafd26e30410d0',
      enlace: '/',
    },
    {
      titulo: '¡Solo apto para auténticos fans del miedo!',
      descripcion:
        'Participa en el sorteo con "No hables con extraños" y podrás conseguir una experiencia de escape room si eres del programa Terror y Suspense de myCINESA.',
      finalizacion: 'El sorteo termina el: 29/09/2024',
      imagen:
        'https://www.cinesa.es/media/s10jtw2s/banner-oferta-1-tys-sept.png?width=370&height=184&v=1db04ec2a5ea400',
      enlace: '/',
    },
    {
      titulo: '¡Consigue un año de cine con Joker: Folie à Deux!',
      descripcion:
        'Participa en el sorteo con "Joker: Folie à Deux" y podrás conseguir una suscripción anual UNLIMITED LUXE.',
      finalizacion: 'El sorteo termina el: 06/10/2024',
      imagen:
        'https://www.cinesa.es/media/o0ld0xx4/02_website_800x400_es_no-copy-v2.jpg?width=370&height=184&v=1daff8957990720',
      enlace: '/',
    },
    {
      titulo: '¡Ser el primero en ver "Joker: Folie à Deux" tiene premio!',
      descripcion:
        '¿Preparado para ver Joker: Folie à Deux? Sé de los primeros testigos en presenciar de nuevo a Joker y a Harley Quinn, ¡y consigue varios premios inspirados en la película!',
      finalizacion: 'La oferta termina el: 06/10/2024',
      imagen:
        'https://www.cinesa.es/media/1azfljw1/banner-joker.png?width=370&height=184&v=1db0035f7f72ec0',
      enlace: '/',
    },
    {
      titulo: '¡Ser de los primeros en ver Transformers One tiene premio!',
      descripcion:
        'Compra ya tu entrada online para ver Transformers One en IMAX y podrás llevarte un imán de regalo.',
      finalizacion: 'La oferta termina el: 22/09/2024',
      imagen:
        'https://www.cinesa.es/media/v2hnguex/banner-800x400-transformers-im%C3%A1n.png?width=370&height=184&v=1daff9bc8d580a0',
      enlace: '/',
    },
  ];
}
