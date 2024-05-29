import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import routes from './app.routes'; // Fix the import statement
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync()]
};
