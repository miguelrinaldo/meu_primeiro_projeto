import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({

  selector: 'app-calculadora',
  
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
  
  })
  
  
export class Calculadora {
  numero1 = 0;
  numero2 = 0;
  resultado = 0;
}
