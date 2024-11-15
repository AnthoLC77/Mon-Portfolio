import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { register as registerSiperElements } from 'swiper/element/bundle';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';



registerSiperElements();
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
  ]
})

