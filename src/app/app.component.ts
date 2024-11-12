import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { MyIntroductionComponent } from './components/my-introduction/my-introduction.component';
import { ThemeToggleButtonComponent } from './components/theme-toggle-button/theme-toggle-button.component';
import { SkillComponent } from './components/skill/skill.component';
import { SlideInAnimateDirective } from './directives/slide-in-animate.directive';
import { TimelineComponent } from './components/timeline/timeline.component';
import { CommonModule, NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgFor, CardProjectComponent, MyIntroductionComponent, ThemeToggleButtonComponent, SkillComponent, SlideInAnimateDirective, TimelineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppComponent {
  constructor(private el: ElementRef) {
    console.log('Directive applied on element:', el.nativeElement);
  }

}
