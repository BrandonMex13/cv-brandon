import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from '../../interfaces/proyecto.interface';

@Component({
  selector    : 'app-proyectos',
  templateUrl : './proyectos.component.html',
  styleUrls   : ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

    proyectosPersonales : Proyecto[] = [];

    date : Date = new Date();

    @Input('heroe') heroe !: number;

    constructor() { }

    ngOnInit(): void {

        this.proyectosPersonales = [
            {
                idProyecto       : 1,
                nombreProyecto   : "Gifs App",
                descripcion      : "Consulta de catalogo de gifs con el uso de una API",
                fechaInicio      : this.date,
                fechaTerminacion : this.date,
                lenguaje         : ["Angular", " Typescript", " HTML", " CSS" ],
                routerLink       : "https://gifsapp-brandon.netlify.app/",
                imglink          : "giff-app.png"
            },
            {
                idProyecto       : 2,
                nombreProyecto   : "Paises",
                descripcion      : "Consulta de paises con el uso de una API",
                fechaInicio      : this.date,
                fechaTerminacion : this.date,
                lenguaje         : ["Angular", " Typescript", " HTML", " CSS" ],
                routerLink       : "https://paisesapp-brandon.netlify.app/",
                imglink          : "pais-app.png"
            },
        ];
    }

}
