import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SlideInAnimateDirective } from '../../directives/slide-in-animate.directive';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [SlideInAnimateDirective],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SkillComponent {}
