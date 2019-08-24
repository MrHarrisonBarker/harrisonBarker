import { Component, OnInit } from '@angular/core';
import { MajorTomService } from '../major-tom.service';
import { Project } from '../project';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  public project: Project;
  public projectReadme: string;

  constructor(private majorTom: MajorTomService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('getting id', params);
      this.project = this.majorTom.getProjectById(params['projectId']);
    })

      this.majorTom.getGitHubReadMe(this.project.Repo).subscribe(data => {
        this.projectReadme = atob(data.content);
      });

  }

}
