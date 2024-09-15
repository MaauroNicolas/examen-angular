import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { apipersonalService } from './services/api-personal.service';
import { Observable } from 'rxjs';
import { personal } from './types/types';
import { HomeComponent } from './home/home.component';
import { RouterOutlet, RouterLink } from '@angular/router';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, HomeComponent, RouterOutlet, RouterLink, ],
  template: `
  
  <header class="todo">
    
    <h1 class = "tittle">Lista del personal {{title}}!</h1>
      @if(Resultadopersonal$ | async; as personal){
        <app-home [home] = "personal"/>

    }
  
 
 
<router-outlet/>
  
 </header>
  `,

  styleUrl: './app.component.css'

})
export class AppComponent implements OnInit{
  
  public Resultadopersonal$!: Observable<personal[]>
  title = '';

  
  constructor(private apipersonal: apipersonalService){}

  ngOnInit(): void {
    this.Resultadopersonal$ = this.apipersonal.getAll()
  }
}
