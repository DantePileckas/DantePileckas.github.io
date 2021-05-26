import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import {ExperenceComponent} from './components/experence/experence.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { ContactComponent } from './components/contact/contact.component';


const APP_ROUTES: Routes=[
{path:'home' , component: HomeComponent},
{path:'aboute', component:AboutComponent},
{path:'experence', component:ExperenceComponent},
{path:'proyects', component:ProyectsComponent},
{path:'contact', component:ContactComponent},
{path:'', pathMatch:'full', redirectTo:'home'},
{path:'**', pathMatch:'full', redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);