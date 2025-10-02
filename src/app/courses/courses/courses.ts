import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Course } from '../model/course';
import {MatCardModule} from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-courses',
  imports: [MatToolbar, MatTableModule, MatCardModule, MatToolbar],
  templateUrl: './courses.html',
  styleUrl: './courses.scss'
})

export class Courses {

  courses: Course[] = [
    { _id: '1', name: 'Angular', category: 'Front-End' },
    { _id: '2', name: 'Java', category: 'Back-End' },
    { _id: '3', name: 'TypeScript', category: 'Front-End' }
  ];
  displayedColumns = ['name', 'category'];

}
