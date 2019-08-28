import {Component, ElementRef, HostListener, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public isBioOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  eventHandler() {
    this.isBioOpen = !this.isBioOpen;
  }

}
