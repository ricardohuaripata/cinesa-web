import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cines',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './cines.component.html',
  styleUrl: './cines.component.scss',
})
export class CinesComponent {
  searchQuery: string = '';

  cines: any[] = [
    {
      nombre: 'As Cancelas',
      ubicacion: 'Cinesa en Santiago de Compostela, A Coruña · ISENSE · VOSE',
      imagen:
        'https://www.cinesa.es/media/43epcp4q/as-cancelas.jpg?width=1200&height=630&v=1d8e96c6d60cd70',
    },
    {
      nombre: 'Bahía de Santander',
      ubicacion: 'Cinesa en Santander · VOSE',
      imagen:
        'https://www.cinesa.es/media/er0dlbzl/santander.jpg?width=1200&height=630&v=1d8e96c84d12b30',
    },
    {
      nombre: 'Bonaire',
      ubicacion: 'Cinesa LUXE en Valencia · ISENSE · SCREENX · VOSE',
      imagen:
        'https://www.cinesa.es/media/vkpnm1px/bonaire.jpg?width=1200&height=630&v=1d8e96c6ee1ef30',
    },
    {
      nombre: 'Festival Park',
      ubicacion: 'Cinesa en Palma de Mallorca · IMAX · VOSE',
      imagen:
        'https://www.cinesa.es/media/l3aluo5q/festival-park.jpg?width=1200&height=630&v=1da6bd81a5f92b0',
    },
    {
      nombre: 'Garbera',
      ubicacion: 'Cinesa LUXE en San Sebastián - Donostia (Gipuzkoa) · VOSE',
      imagen:
        'https://www.cinesa.es/media/0uzdtlzp/garbera.jpg?width=1200&height=630&v=1d8e96c73181ed0',
    },
    {
      nombre: 'Las Rosas',
      ubicacion: 'Cinesa en Las Rosas (Madrid) · VOSE',
      imagen:
        'https://www.cinesa.es/media/f01d1j2o/las-rosas.jpg?width=1200&height=630&v=1d8e96c775616a0',
    },
    {
      nombre: 'Méndez Álvaro',
      ubicacion: 'Cinesa en Méndez Álvaro (Madrid) · ISENSE · VOSE',
      imagen:
        'https://www.cinesa.es/media/duvm114p/mendez-alvaro.jpg?width=1200&height=630&v=1d8e96c7bb81130',
    },
    {
      nombre: 'Parque Principado',
      ubicacion: 'Cinesa LUXE en Paredes (Asturias) · VOSE',
      imagen:
        'https://www.cinesa.es/media/134ffjgo/parque-principado_luxe.jpg?width=1200&height=630&v=1da966a31028740',
    },
    {
      nombre: 'Camas',
      ubicacion: 'Cinesa en Camas (Sevilla) · VOSE',
      imagen:
        'https://www.cinesa.es/media/qcyezkmy/camas-cinesa-sevilla.jpg?width=1200&height=630&v=1d8e79978f16c50',
    },
  ];

  get filteredCines() {
    return this.cines.filter(
      (cine) =>
        cine.nombre.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        cine.ubicacion.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
