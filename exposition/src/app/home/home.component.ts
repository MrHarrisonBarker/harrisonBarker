import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { MajorTomService } from '../major-tom.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public projects: Project[];

  constructor(private majorTom: MajorTomService) { }

  ngOnInit() {

    this.projects = this.majorTom.getprojects();

  }

}
