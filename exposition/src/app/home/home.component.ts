import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { MajorTomService } from '../major-tom.service';

class SwitchEvent {
  currentValue: boolean;
  previousValue: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public projects: Project[];
  public completeProjects: Project[];

  constructor(private majorTom: MajorTomService) { }

  ngOnInit() {

    this.projects = this.majorTom.getprojects();
    this.completeProjects = this.projects;

  }

  switchFilter(event: SwitchEvent) {

    if (event.currentValue) {
      this.projects = this.completeProjects.filter(project => project.IsFinished == event.currentValue);
    } else {
      this.projects = this.completeProjects;
    }


    console.log(event);
  }

}
