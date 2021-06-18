import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ExperenceComponent } from './components/experence/experence.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { APP_ROUTING } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//pipe
import { BirthDayPipe } from 'src/pipes/brithday';

//Servicios
import {EducationService} from './services/EducationService'
import { CertificationService } from './services/CertificationService';
import { ExperenceService } from './services/ExperenceService';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExperenceComponent,
    ProyectsComponent,
    ContactComponent,
    NavbarComponent,
    BirthDayPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule
   
  ],
  providers: [
    EducationService,
    CertificationService,
    ExperenceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
