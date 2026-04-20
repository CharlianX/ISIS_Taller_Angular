import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service'; 

@Component({
  selector: 'app-series-list',
  standalone: false,
  templateUrl: './series-list.html', 
  styleUrls: ['./series-list.css'] // <-- Corregido el ./
})
export class SeriesListComponent implements OnInit {
  series: Serie[] = [];
  promedioTemporadas: number = 0;
  selectedSerie: Serie | null = null; // <-- Guardará la serie que reciba clic

  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries(): void {
    this.serieService.getSeries().subscribe({
      next: (datos: Serie[]) => {
        this.series = datos;
        this.calcularPromedio();
      },
      error: (error) => {
        console.error("Error cargando las series:", error);
      }
    });
  }

  calcularPromedio(): void {
    if (this.series.length === 0) return;
    let totalTemporadas = this.series.reduce((acc, curr) => acc + curr.seasons, 0);
    this.promedioTemporadas = totalTemporadas / this.series.length;
  }

  // Método para manejar el clic en una fila
  onSelect(serie: Serie): void {
    this.selectedSerie = serie;
  }
}