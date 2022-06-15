import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvModule } from './cv/cv.module';

const routes: Routes = [
  {
    path: '',
    loadChildren : () => import('./cv/cv.module').then( m => m.CvModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
