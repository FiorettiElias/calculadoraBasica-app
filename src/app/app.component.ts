import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Aplicación de Calculadora';
  primerNumero!: number;
  segundoNumero!: number;
  resultado!: number;

  onSumar():void{
  this.resultado = this.primerNumero + this.segundoNumero;
  
  }

}
