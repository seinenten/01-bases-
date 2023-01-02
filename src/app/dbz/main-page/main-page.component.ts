import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{
  nuevo: Personaje = {
    nombre: 'cacahuate',
    poder: 3000
  }

  constructor(){
    
  }

}
