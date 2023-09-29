import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  // Licenciado en Informática, con un gran interés en Desarrollo web y Desarrollo de software. Con capacidad para aprender y aplicar mis conocimientos al ámbito profesional. En busca de una oportunidad laboral en la que desarrollar mis habilidades y adquirir experiencia. [Número] años de experiencia dirigiendo proyectos de diseño de páginas web incluyendo la recopilación de las necesidades de los usuarios, producción de código, creación de maquetas y mejora del diseño para clientes exigentes. Centrado en la creación de códigos claros, robustos y con una seguridad excepcional. Capacidad para cumplir con los objetivos de compatibilidad y al mismo tiempo cumplir y superar las demandas del cliente.

  descripcion : string = "Hola soy Brandon. Es un gusto que estés leyendo mi web espero que encuentres algo de tu agrado en ella. Con mucho gusto te comparto algunos de mis proyectos que he hecho por diversión. Muchas gracias por visitarme :D"

  constructor() { }

  ngOnInit(): void {
  }

}
