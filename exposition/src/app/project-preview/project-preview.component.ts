import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.css']
})
export class ProjectPreviewComponent implements OnInit {

  @Input() project: Project

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public routeToProj() : void {
    this.router.navigateByUrl(`/proj/${this.project.ProjectId}`)
  }

}
