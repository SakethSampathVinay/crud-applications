import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent implements OnInit {
  students: any[] = [];

  formsData = {
    id: 0,
    name: '',
    grade: 0,
    age: 0,
  };

  constructor(private studentService: ServicesService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudent().subscribe((data) => {
      this.students = data;
    });
  }

  createStudent() {
    const { id, ...payload } = this.formsData;

    this.studentService.createStudent(payload).subscribe(() => {
      this.getStudents();
      this.clearForm();
    });
  }

  updateStudent() {
    this.studentService
      .updateStudent(this.formsData.id, this.formsData)
      .subscribe(() => {
        this.getStudents();
        this.clearForm();
      });
  }
  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.getStudents();
    });
  }

  clearForm() {
    this.formsData = {
      id: 0,
      name: '',
      grade: 0,
      age: 0,
    };
  }

  editStudent(student: any) {
    this.formsData = { ...student };
  }
}
