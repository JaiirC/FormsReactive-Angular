import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './empresa/empresa.component';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';

const routes: Routes = [
  {
    path: 'empresa',
    component: EmpresaComponent
  },
  {
    path: 'empresa-list',
    component: EmpresaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
