import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../models/Project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private jsonDataProject = '../assets/projects.json';

  constructor(private http: HttpClient) {}

  getProjects() : Observable<Project[]> {
    return this.http.get<Project[]>(this.jsonDataProject);
  }
}
