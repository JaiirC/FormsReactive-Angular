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
      {id: 1, name: 'Juan', ruc: 1721901302,openingdate:'1990-01-01', state: true},
      {id: 2, name: 'Maria', ruc: 1721901332, openingdate:'1998-02-11', state: true}
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
