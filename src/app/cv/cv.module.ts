import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvRoutingModule } from './cv-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { HomeComponent } from './pages/home/home.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from '../shared/footer/footer.component';


@NgModule({
  declarations: [
    PresentacionComponent,
    HomeComponent,
    TrabajosComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CvRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class CvModule { }
