import { Component } from '@angular/core';
import { SlideInAnimateDirective } from '../../directives/slide-in-animate.directive';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [SlideInAnimateDirective],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {

}
