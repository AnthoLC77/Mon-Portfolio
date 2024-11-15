import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { Project } from '../../models/Project.model';
import { ProjectService } from '../../services/project/project.service';
import { CommonModule, NgFor } from '@angular/common';
import { SlideInAnimateDirective } from '../../directives/slide-in-animate.directive';



@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [CommonModule, NgFor, SlideInAnimateDirective],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardProjectComponent  {
  projects: Project[] = [];
  isEnd = false;

  @ViewChild ("swiperEx") swiperEx ?: ElementRef<any>


  constructor(
    private prjService : ProjectService,
  ) {

  }

  ngOnInit(): void {
    this.prjService.getProjects().subscribe((data) => {
      this.projects = data.map(item => new Project(item.title, item.image, item.description, item.technologies, item.badge, item.lien));
    });
  }

  onReachEnd() {
    if(this.projects === undefined) {

      this.isEnd = true
      console.log("Reached the end: Animation should stop")
    }
  }

  onFromEdge() {
    this.isEnd = false
    console.log("Left the edge: Animation should restart");
  }

  onSlideChange() {
    console.log("test");

  }

  openProject(link: string): void {
    window.open(link, '_blank');
  }

}
