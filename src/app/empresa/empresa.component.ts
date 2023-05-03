import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent {
  form: FormGroup;//Reactive Form

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      ruc: ['', [Validators.required, Validators.minLength(13),Validators.maxLength(13), ,Validators.pattern("^[0-9]*$")]],
      openingdate: [new Date(),[Validators.required]], 
      state: [false,[Validators.required, this.isTrueValidator]],
      employees: [0, [Validators.min(1)]],
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
