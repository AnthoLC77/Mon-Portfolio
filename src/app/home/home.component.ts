import { Component } from '@angular/core';
import { ThemeToggleButtonComponent } from '../components/theme-toggle-button/theme-toggle-button.component';
import { CardProjectComponent } from '../components/card-project/card-project.component';
import { MyIntroductionComponent } from '../components/my-introduction/my-introduction.component';
import { TimelineComponent } from '../components/timeline/timeline.component';
import { SkillComponent } from '../components/skill/skill.component';
import { SlideInAnimateDirective } from '../directives/slide-in-animate.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ThemeToggleButtonComponent, CardProjectComponent, MyIntroductionComponent, TimelineComponent, SkillComponent, SlideInAnimateDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
