import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { EmpresasService } from './empresas.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent {
  name: string = '';
  form: FormGroup;//Reactive Form
  
  constructor(private formBuilder: FormBuilder,
              private empresasService: EmpresasService) {
    if (this.empresasService.selectedEmpresa) {
      this.form = formBuilder.group({
        id: [this.empresasService.selectedEmpresa.id],
        name: [this.empresasService.selectedEmpresa.name, [Validators.required, Validators.minLength(3)]],
        ruc: [this.empresasService.selectedEmpresa.ruc, [Validators.required, Validators.minLength(13),Validators.maxLength(13), ,Validators.pattern("^[0-9]*$")]],
        openingdate: [this.empresasService.selectedEmpresa.openingdate,[Validators.required]], 
        state: [this.empresasService.selectedEmpresa.state,[Validators.required, this.isTrueValidator]],
        employees: [this.empresasService.selectedEmpresa.employees, [Validators.min(1)]],
        money: [this.empresasService.selectedEmpresa.money, [Validators.min(1)]],
        stars: [this.empresasService.selectedEmpresa.stars],
        psword:[this.empresasService.selectedEmpresa.psword],
        tags:[this.empresasService.selectedEmpresa.tags],
    });
  } else{
    this.form = formBuilder.group({
      id: [0],
      name: ['', [Validators.required, Validators.minLength(3)]],
      ruc: ['', [Validators.required, Validators.minLength(13),Validators.maxLength(13), ,Validators.pattern("^[0-9]*$")]],
      openingdate: [new Date(),[Validators.required]], 
      state: [false,[Validators.required, this.isTrueValidator]],
      employees: [0, [Validators.min(1)]],
      money:[0, [Validators.min(1)]],
      stars: [5],
      psword:[''],
      tags:[''],
    });
  }
}
    isTrueValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value === true) {
      return null;
    } else {
      return { notTrue: true };
    }
  }
  onSubmit() {
    if (this.form.valid) {
      this.addEmpresa;
    } else {
      alert('Formulario No Valido');
    }
  }
  
  addEmpresa() {
    this.empresasService.addEmpresa(this.form.value);
    console.log(this.empresasService.empresas);
  }

  updateEmpresa() {
    this.empresasService.updateEmpresa(this.idField.value, this.form.value);
    console.log(this.empresasService.empresas);
  }

  validateEmpresa() {
    if (this.name === '' && this.name.length <= 3) {
    }
  }
  get idField() {
    return this.form.controls['id'];
  }
}