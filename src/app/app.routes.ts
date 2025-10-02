import { CoursesRoutingModule } from './courses/courses-routing-module';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CoursesModule } from './courses/courses-module';

export const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', loadChildren: () => import('./courses/courses-module').then(m => m.CoursesModule) }
];

