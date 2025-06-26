import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { SchoolComponent } from './school/school.component';
import { PrincipalComponent } from './principal/principal.component';

export const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'school', component: SchoolComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: '', redirectTo: '/students', pathMatch: 'full' },
];
