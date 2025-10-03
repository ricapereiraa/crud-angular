import { Constructor } from './../../../../node_modules/@angular/cdk/schematics/update-tool/migration.d';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Course } from '../model/course';
import {MatCardModule} from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { CoursesService } from '../services/courses';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-courses',
  imports: [MatToolbar, MatTableModule, MatCardModule, MatToolbar, MatProgressSpinnerModule, CommonModule,],
  templateUrl:'./courses.html',
  styleUrl: './courses.scss'
})

export class Courses {

  courses: Observable<Courses[]>;


  constructor (private coursesService: CoursesService) {

    this.courses = this.coursesService.list();

  }

  displayedColumns = ['name', 'category'];

  ngOnInit(): void {

  }

}
