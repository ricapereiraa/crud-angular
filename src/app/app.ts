import { HttpClientModule } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    MatToolbarModule,
    RouterOutlet,
    HttpClientModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('crud-angular');
}
