import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SkillComponent } from './components/skill/skill.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { TimelineComponent } from './components/timeline/timeline.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'skills',
    component: SkillComponent
  },
  {
    path: 'project',
    component: CardProjectComponent
  },
  {
    path: 'cursus',
    component: TimelineComponent
  }
];
