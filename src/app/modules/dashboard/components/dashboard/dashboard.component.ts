import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../../../models/project.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  projects: Project[];

  constructor() { 
    this.projects = [];
  }

  ngOnInit(): void {
  }

}
