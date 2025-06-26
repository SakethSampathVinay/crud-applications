import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-principal',
  imports: [FormsModule, CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent {
  principalsList: any[] = [];

  principalForm = {
    id: 0,
    name: '',
    age: 0,
    experience: 0,
  };

  constructor(private principalService: ServicesService) {}

  ngOnInit(): void {
    this.getPrincipal();
  }

  getPrincipal() {
    this.principalService.getPrincipal().subscribe((data) => {
      this.principalsList = data;
    });
  }

  createPrincipal() {
    const { id, ...payload } = this.principalForm;

    this.principalService.createPrincipal(payload).subscribe(() => {
      this.getPrincipal();
      this.clearForm();
    });
  }

  updatePrincipal() {
    this.principalService
      .updatePrincipal(this.principalForm.id, this.principalForm)
      .subscribe(() => {
        this.getPrincipal();
        this.clearForm();
      });
  }
  deletePrincipal(id: number) {
    this.principalService.deletePrincipal(id).subscribe(() => {
      this.getPrincipal();
    });
  }

  clearForm() {
    this.principalForm = {
      id: 0,
      name: '',
      age: 0,
      experience: 0,
    };
  }
  editPrincipal(principal: any) {
    this.principalForm = { ...principal };
  }
}
