import { Injectable } from '@angular/core';
import { Project } from './project';
import { projects } from './PROJECTS';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MajorTomService {

  constructor(private http: HttpClient) {
    localStorage.setItem('Projects',JSON.stringify(projects));
  }

  public getprojects(): Project[] {

    let localProjects: Project[] = JSON.parse(localStorage.getItem('Projects'));

    if (localProjects) {
      return localProjects;
    }

    localStorage.setItem('Projects',JSON.stringify(projects));
    return projects
  }

  public getProjectById(id: number): Project  {
    let localProjects: Project[] = JSON.parse(localStorage.getItem('Projects'));

    if (localProjects) {
      return localProjects.filter( proj => proj.ProjectId == id)['0'];
    }

    return projects.filter( proj => proj.ProjectId == id)['0'];
  }

  public getGitHubReadMe(url: string): Observable<any> {

    let Path = new URL(url).pathname.split('/');
    let UserName = Path[1];
    let RepoName = Path[2];


    return this.http.get<any>(`https://api.github.com/repos/${UserName}/${RepoName}/readme`);

  }
}
