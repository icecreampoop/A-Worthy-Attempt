import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FirstObjectComponent } from './components/first-object/first-object.component';

export const routes: Routes = [
    { path: 'homepage', component: HomepageComponent },
    { path: 'first-object', component: FirstObjectComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
