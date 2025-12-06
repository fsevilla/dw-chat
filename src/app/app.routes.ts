import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { NotFound } from './pages/not-found/not-found';
import { Contact } from './pages/contact/contact';
import { Signup } from './pages/signup/signup';
import { Login } from './pages/login/login';
import { authGuard } from './shared/guards/auth-guard';
import { unauthGuard } from './shared/guards/unauth-guard';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: 'signup', component: Signup, canActivate: [unauthGuard] },
    { path: 'login', component: Login, canActivate: [unauthGuard] },
    { 
        path: 'users', 
        canActivate: [authGuard],
        loadChildren: () => import('./pages/users/users-module').then(m => m.UsersModule)
    },
    { path: '**', component: NotFound }
];



