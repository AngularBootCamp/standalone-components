// https://github.com/stackblitz/core/issues/2366
import 'zone.js'; // Avoid error in StackBlitz
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withRouterConfig } from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes, config } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes, withRouterConfig(config))
  ]
});
