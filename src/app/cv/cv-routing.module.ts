import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';


const routes : Routes = [{
    path: '',
    component : HomeComponent,
    children : [
        {
            path:'presentacion',
            component : PresentacionComponent
        }
    ]
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  exports : [
    RouterModule
  ]
})
export class CvRoutingModule { }
