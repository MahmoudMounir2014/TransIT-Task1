import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path:'',redirectTo:'home' ,pathMatch:'full',title:'home'},
    {path:'home',component:HomeComponent,title:'home'},
    {path:'register',component:RegisterComponent,title:'register'},
    {path:'**',component:NotFoundComponent,title:'notfound'},
];
