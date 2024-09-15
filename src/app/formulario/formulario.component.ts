import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';



import {
  FormControl,
   FormGroup,
    ReactiveFormsModule,
    Validators 
  } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule,],
  template: `
  
  <div class="container">
       <div class="row justify-content-center">
          <form class="col-md-8-col-lg-6" [formGroup]="personalform"
          (submit)="handleSubmit()">
            <fieldset class="bg-secondary text-white p-3 ">
              <legend>Agregar personal</legend>
            
            <div class="mb-3">
            <label for="name" class="form-label">Nombre</label>
            <input
            type="text"
            class="form-control"
            id="name"
            formControlName="name"
            placeholder="Nombre"
           />
      
           <div class="alert alert-danger"
           [hidden]="name.valid  || name.untouched"> el nombre es requerido</div>
              <div class="mb-3">
              <label for="real_name" class="form-label">Apellido</label>
              <input
              type="text"
              class="form-control"
              id="real_name"
              formControlName="real_name"
             placeholder="Apellido"
          />
          

          <div class="alert alert-danger"
          [hidden]="real_name.valid  || real_name.untouched"> el Apellido es requerido</div>
          
          <div class="mb-3">
              <label for="email" class="form-label">Email</label>
               <input
              type="text"
              class="form-control"
              id="email"
              formControlName="email"
              placeholder="Escribe su email"
              
          />
          <div class="alert alert-danger"
          [hidden]="email.valid  || email.untouched"> el email es requerido</div>
         
               <div class="mb-3">
              <label for="email" class="form-label">Numero de telefono</label>
              <input
              type="number"
              class="form-control"
              id="number"
              formControlName="number"
              placeholder="coloque su numero de telefono"
          />

          <div class="alert alert-danger"
          [hidden]="number.valid  || number.untouched"> el numero es requerido</div>

        </div>
        <div>
        <button type="submit" class="btn btn-outline-warning">Enviar</button>
        </div>
        
       </div> 
    </div>

  
  `,
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
 

  personalform = new FormGroup ({
    name: new FormControl ('',Validators.required),
    real_name: new FormControl ('',Validators.required),
    email: new FormControl ('',Validators.required),
    number: new FormControl ('',Validators.required),
  });


  get name () {
    return this.personalform.get('name') as FormControl
  }
  get real_name () {
    return this.personalform.get('real_name') as FormControl
  }
  get email () {
    return this.personalform.get('email') as FormControl
  }
  get number () {
    return this.personalform.get('number') as FormControl
  }
  handleSubmit(){
    if(this.personalform.invalid) return;
    const newPersonal = {
      name: this.name.value,
      real_name:this.real_name.value,
      email:this.email.value,
      number:this.number.value,
    };
    alert(newPersonal);
    
  }

}
  
  
  



