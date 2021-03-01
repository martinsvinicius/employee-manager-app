import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Employee from 'src/@types/employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private base_url = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
    
  }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.base_url}/employee`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.base_url}/employee/add`, employee);
  }

  public findEmployee(id): Observable<Employee> {
    return this.http.get<Employee>(`${this.base_url}/employee/find/${id}`);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.base_url}/employee/update`, employee);
  }

  public deleteEmployee(id): Observable<void> {
    return this.http.delete<void>(`${this.base_url}/employee/delete/${id}`);
  }
}
