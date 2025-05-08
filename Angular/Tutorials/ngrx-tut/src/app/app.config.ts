import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import {provideStoreDevtools} from '@ngrx/store-devtools'
import { studentsReducer } from './state/students.reducer';
 
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideStore(),
    provideStore({}),
    provideState({
      name: 'students',
      reducer: studentsReducer
    }),
    provideStoreDevtools({maxAge: 25, logOnly: false})
    
  
  ]
};
