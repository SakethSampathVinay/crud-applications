import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teachers',
  imports: [FormsModule, CommonModule],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css',
})
export class TeachersComponent {
  teachersList: any[] = [];
  teachersForm = {
    id: 0,
    firstName: '',
    lastName: '',
    subject: '',
    age: 0,
  };

  constructor(private teachers: ServicesService) {}

  ngOnInit() {
    this.getTeachers();
  }

  getTeachers() {
    this.teachers.getTeacher().subscribe((data) => {
      this.teachersList = data;
    });
  }

  createTeacher() {
    const { id, ...payload } = this.teachersForm;

    this.teachers.createTeacher(payload).subscribe((data) => {
      this.teachersForm = {
        id: 0,
        firstName: '',
        lastName: '',
        subject: '',
        age: 0,
      };
      this.getTeachers();
      this.clearForm();
    });
  }

  updateTeacher() {
    this.teachers
      .updateTeacher(this.teachersForm.id, this.teachersForm)
      .subscribe(() => {
        this.getTeachers();
        this.clearForm();
      });
  }

  deleteTeacher(id: number) {
    this.teachers.deleteTeacher(id).subscribe(() => {
      this.getTeachers();
    });
  }

  editStudent(teacher: any) {
    this.teachersForm = { ...teacher };
  }

  clearForm() {
    this.teachersForm = {
      id: 0,
      firstName: '',
      lastName: '',
      subject: '',
      age: 0,
    };
  }
}
