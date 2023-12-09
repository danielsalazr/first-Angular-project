import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})


export class AppComponent {
  title = 'todoapp';
  welcome = 'Hola a todos'

  tasks = [
    "Instalar angular CLI",
    "Crear proyecto",
    "Crear Componentes",
  ]
}
