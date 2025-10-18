import { Routes } from '@angular/router';
import path from 'node:path';
import { HomePageComponent } from './home-page/home-page.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path: 'home', component: HomePageComponent},
    {path : 'gallery', component : GalleryComponent},
    {path : 'shopping-cart', component : ShoppingCartComponent},
    {path : 'register', component : RegisterComponent},
    
    { path : '**', component : ErrorComponentComponent}
];
