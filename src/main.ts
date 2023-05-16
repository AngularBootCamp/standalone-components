// https://github.com/stackblitz/core/issues/2366
import 'zone.js'; // Avoid error in StackBlitz
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig);
