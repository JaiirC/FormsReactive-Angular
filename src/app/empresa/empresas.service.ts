import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  empresas: any[] = [];
  selectedEmpresa: any = null;
  constructor() {
    this.loadEmpresas();
   }
   private loadEmpresas() {
    this.empresas = [];
    this.empresas.push(
      {id: 1, name: 'Juan', ruc: 1721901302,openingdate:'2005-02-7', state: true , employees: 100, stars: 4 , money: 0},
      {id: 2, name: 'Maria', ruc: 1721901332, openingdate:'1998-02-11', state: true,  employees: 100,stars: 3, money: 300.23}
    );
  }
  addEmpresa(payload: any) {
    this.empresas.push(payload);
  }
  updateEmpresa(id: number, payload: any) {
    const index = this.empresas.findIndex(empresa => empresa.id === id);
    this.empresas[index] = payload;
  }
  deleteEmpresa(id: number) {
    const index = this.empresas.findIndex(empresa => empresa.id === id);
    if (index > -1) {
      this.empresas.splice(index, 1);
    }
  }
}
