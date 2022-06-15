import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvRoutingModule } from './cv-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    PresentacionComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CvRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class CvModule { }
