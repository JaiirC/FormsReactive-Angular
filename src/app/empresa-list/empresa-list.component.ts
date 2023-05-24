import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { EmpresasService } from '../empresa/empresas.service';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.scss']
})
export class EmpresaListComponent {
  empresas: any[] = [];
  selectedEmpresa: any;

  constructor(private empresasService: EmpresasService, private router: Router) {
    this.empresas = this.empresasService.empresas;
  }

  createEmpresa() {
    this.empresasService.selectedEmpresa = null;
    this.router.navigate(['empresa']);
  }

  editEmpresa(empresa: any) {
    this.empresasService.selectedEmpresa = empresa;
    this.router.navigate(['empresa']);
  }

  deleteEmpresa(id: number) {
    this.empresasService.deleteEmpresa(id);
    console.log(this.empresasService.empresas);
  }
}
