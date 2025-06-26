import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-school',
  imports: [FormsModule, CommonModule],
  templateUrl: './school.component.html',
  styleUrl: './school.component.css',
})
export class SchoolComponent {
  schoolsList: any[] = [];

  schoolsForm = {
    id: 0,
    name: '',
    address: '',
  };

  constructor(private schoolService: ServicesService) {}

  ngOnInit(): void {
    this.getSchools();
  }

  getSchools() {
    this.schoolService.getSchool().subscribe((data) => {
      this.schoolsList = data;
    });
  }

  createSchool() {
    const { id, ...payload } = this.schoolsForm;

    this.schoolService.createSchool(payload).subscribe(() => {
      this.getSchools();
      this.clearForm();
    });
  }

  updateSchool() {
    this.schoolService
      .updateSchool(this.schoolsForm.id, this.schoolsForm)
      .subscribe(() => {
        this.getSchools();
        this.clearForm();
      });
  }
  deleteSchool(id: number) {
    this.schoolService.deleteSchool(id).subscribe(() => {
      this.getSchools();
    });
  }

  clearForm() {
    this.schoolsForm = {
      id: 0,
      name: '',
      address: '',
    };
  }

  editSchool(school: any) {
    this.schoolsForm = { ...school };
  }
}
