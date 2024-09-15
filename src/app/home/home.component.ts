import { Component, OnInit, Input } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { personal } from '../types/types';
import { apipersonalService } from '../services/api-personal.service';
import { AsyncPipe } from '@angular/common';
import { FormularioComponent } from "../formulario/formulario.component";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AsyncPipe, FormularioComponent],
  template: `

  
    <table class = "table">
      <thead>
        <tr class = "columnas">
          <th scope="col">#</th>
          <th scope="col">personal</th>
          <th scope="col">legajo</th>
          <th scope="col">ciudad</th>
          <th scope="col">compañía</th>
        </tr>
      </thead>

  <tbody>
  @for(personal of personal; track personal.id; let i = $index) {
    <tr>
        <td>{{i + 1}}</td>
        <td>{{personal.nombre}}</td>
        <td>{{personal.fecha}}</td>
        <td>{{personal.ciudad}}</td>
        <td class="butcenter">
        <button class= "buttondesc"(click)="mostrardescripcion(personal.id)">Ver compañía</button> 
        </td>
    </tr>
     
     
  }
  </tbody>
</table>


<div class = "descripcion">

@if(descripcion){
  <h3 class="titdesc"  >Descripción:</h3>
  <p>{{ descripcion }}</p>
}

</div>







<br>
<app-formulario>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  @Input() home: personal[] | null = [];
  
  personal: any[] =[];
  descripcion: string | undefined;
  selectedpersonalId: number | undefined;

  constructor (private apipersonal: apipersonalService) {}

ngOnInit(): void {
  this.apipersonal.getpersonal().subscribe(data => {
    this.personal = data;
  }, error => {
    console.error('Error en la descripcion:', error);
  
  });
}

mostrardescripcion(id: number): void {
  this.apipersonal.getdescripcionById(id).subscribe(data => {
    this.descripcion = data.descripcion;
    this.selectedpersonalId = id;
  }, error => {
    console.error('Error de descripcion:', error);
  });

}}