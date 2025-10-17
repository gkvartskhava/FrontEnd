import { Routes } from '@angular/router';
import path from 'node:path';
import { HomePageComponent } from './home-page/home-page.component';
import { ErrorComponentComponent } from './error-component/error-component.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path: 'home', component: HomePageComponent},
    
    { path : '**', component : ErrorComponentComponent}
];
