import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private studentsApiUrl = 'http://localhost:3000/students';
  private teachersApiUrl = 'http://localhost:3000/teachers';
  private schoolApiUrl = 'http://localhost:3000/school';
  private principalApiUrl = 'http://localhost:3000/principal';

  constructor(private http: HttpClient) {}

  // Students

  getStudent(): Observable<any> {
    return this.http.get(`${this.studentsApiUrl}`);
  }

  updateStudent(id: number, student: any): Observable<any> {
    return this.http.put(`${this.studentsApiUrl}/${id}`, student);
  }

  createStudent(student: any): Observable<any> {
    return this.http.post(this.studentsApiUrl, student);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.studentsApiUrl}/${id}`);
  }

  // Teachers

  getTeacher(): Observable<any> {
    return this.http.get(`${this.teachersApiUrl}`);
  }

  updateTeacher(id: number, teacher: any): Observable<any> {
    return this.http.put(`${this.teachersApiUrl}/${id}`, teacher);
  }

  createTeacher(teacher: any): Observable<any> {
    return this.http.post(this.teachersApiUrl, teacher);
  }

  deleteTeacher(id: number): Observable<any> {
    return this.http.delete(`${this.teachersApiUrl}/${id}`);
  }

  // School

  getSchool(): Observable<any> {
    return this.http.get(`${this.schoolApiUrl}`);
  }

  updateSchool(id: number, school: any): Observable<any> {
    return this.http.put(`${this.schoolApiUrl}/${id}`, school);
  }

  createSchool(school: any): Observable<any> {
    return this.http.post(this.schoolApiUrl, school);
  }

  deleteSchool(id: number): Observable<any> {
    return this.http.delete(`${this.schoolApiUrl}/${id}`);
  }

  // Principal

  getPrincipal(): Observable<any> {
    return this.http.get(`${this.principalApiUrl}`);
  }

  updatePrincipal(id: number, principal: any): Observable<any> {
    return this.http.put(`${this.principalApiUrl}/${id}`, principal);
  }

  createPrincipal(principal: any): Observable<any> {
    return this.http.post(this.principalApiUrl, principal);
  }

  deletePrincipal(id: number): Observable<any> {
    return this.http.delete(`${this.principalApiUrl}/${id}`);
  }
}
