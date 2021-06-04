import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';




import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ExperenceComponent } from './components/experence/experence.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExperenceComponent,
    ProyectsComponent,
    ContactComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
