import { Component, OnInit } from '@angular/core';
import { Trabajo } from '../../interfaces/trabajos.interface';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

    trabajos : Trabajo[] = [];

    constructor() { }

    ngOnInit(): void {

        this.trabajos = [
            {
                idTrabajo : 1,
                titulo: "Desarrollador web",
                nombreTrabajo: "Caprepa",
                descripcion: "Desarrollador web formando parte del equipo administrativo llevando relación con las distintas áreas para la implementación y despliegue de distintos sistemas para el control de la empresa así como de sus distintas marcas.",
                imagen: "Caprepa.png"
            },
            {
                idTrabajo : 2,
                titulo: "Arquitecto de software",
                nombreTrabajo: "Coppel",
                descripcion: "Liderando a un equipo de desarrollo se construye una solución siguiendo estándares y patrones de diseños según lo requiera el proyecto.",
                imagen: "Coppel.jpg"
            }
        ];

    }

}
