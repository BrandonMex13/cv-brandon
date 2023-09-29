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

    constructor() { }

    ngOnInit(): void {

        this.proyectosPersonales = [
            {
                idProyecto       : 6,
                nombreProyecto   : "Web Freelancer - Presentacion",
                descripcion      : "Pequeña web de presentación como Freelancer",
                fechaInicio      : this.date,
                fechaTerminacion : this.date,
                lenguaje         : ["HTML", " CSS", " javascript" ],
                routerLink       : "https://web-freelancer-brandon.netlify.app/",
                imglink          : "web-freelancer.png"
            },
            {
                idProyecto       : 6,
                nombreProyecto   : "Web Store",
                descripcion      : "Simulación de una tienda en linea",
                fechaInicio      : this.date,
                fechaTerminacion : this.date,
                lenguaje         : ["HTML", " CSS", " javascript" ],
                routerLink       : "https://web-store-brandon.netlify.app/",
                imglink          : "frontend-store.png"
            },
            {
                idProyecto       : 1,
                nombreProyecto   : "Gifs App",
                descripcion      : "Consulta de catálogo de gifs con el uso de una API",
                fechaInicio      : this.date,
                fechaTerminacion : this.date,
                lenguaje         : ["Angular", " Typescript", " HTML", " CSS" ],
                routerLink       : "https://gifsapp-brandon.netlify.app/",
                imglink          : "giff-app.png"
            },
            {
                idProyecto       : 2,
                nombreProyecto   : "Paises",
                descripcion      : "Consulta de países con el uso de una API",
                fechaInicio      : this.date,
                fechaTerminacion : this.date,
                lenguaje         : ["Angular", " Typescript", " HTML", " CSS" ],
                routerLink       : "https://paisesapp-brandon.netlify.app/",
                imglink          : "pais-app.png"
            },
            {
                idProyecto       : 3,
                nombreProyecto   : "Pipes Angular",
                descripcion      : "Conocimiento e implementación de los pipes de angular",
                fechaInicio      : this.date,
                fechaTerminacion : this.date,
                lenguaje         : ["Angular", " Typescript", " HTML", " CSS" ],
                routerLink       : "https://pipes-angular-brandon.netlify.app/",
                imglink          : "pipes-app.png"
            },
            {
                idProyecto       : 5,
                nombreProyecto   : "Bouncing DVD",
                descripcion      : "Clásico logo de DVD rebotando en la pantalla",
                fechaInicio      : this.date,
                fechaTerminacion : this.date,
                lenguaje         : ["HTML", " CSS" ],
                routerLink       : "https://bouncing-dvd-brandon.netlify.app/",
                imglink          : "bouncing-dvd-app.png"
            },
            {
                idProyecto       : 4,
                nombreProyecto   : "Sistema de préstamos",
                descripcion      : "Sistema de préstamos con tabla de amortización",
                fechaInicio      : this.date,
                fechaTerminacion : this.date,
                lenguaje         : ["Javascript", " Boostrap", " PHP", " HTML", " CSS" ],
                routerLink       : "https://github.com/BrandonMex13/sistemas-web-prestamos",
                imglink          : "sistema-prestamos.png"
            }
        ];

    }

}
