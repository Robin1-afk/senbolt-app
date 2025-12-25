import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { ColorPickerModule } from 'ngx-color-picker';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { FlatpickrModule } from 'angularx-flatpickr';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),RouterOutlet,BrowserModule,provideCharts(withDefaultRegisterables()),
    importProvidersFrom(AngularFireModule.initializeApp(environment.firebase),
     FlatpickrModule.forRoot(),
     BrowserAnimationsModule,
     ColorPickerModule,
     CalendarModule.forRoot({provide: DateAdapter,useFactory: adapterFactory}),
     ToastrModule.forRoot({timeOut: 15000,closeButton: true,progressBar: true,})
    )
  ]
};
