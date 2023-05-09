import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})

export class EmpresaComponent {
  cities = [
    { cit: 'Quito', code: 'uio' },
    { cit: 'Guayaquil', code: 'gye' },
    { cit: 'Cuenca', code: 'cue' }
  ];
  form: FormGroup;//Reactive Form
  
  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      ruc: ['', [Validators.required, Validators.minLength(13),Validators.maxLength(13), ,Validators.pattern("^[0-9]*$")]],
      openingdate: [new Date(),[Validators.required]], 
      state: [false,[Validators.required, this.isTrueValidator]],
      employees: [0, [Validators.min(1)]],
      money:[0, [Validators.min(1)]],
      city: [{}],
      stars: [5],
      psword:[''],
      tags:[''],
    })
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
    console.log(this.form);
    if (this.form.valid) {
      alert('Guardado');
    } else {
      alert('Formulario No Valido');
    }
  }
  

}
