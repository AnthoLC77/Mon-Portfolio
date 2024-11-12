import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { register as registerSiperElements } from 'swiper/element/bundle';



registerSiperElements();
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
  ]
})

