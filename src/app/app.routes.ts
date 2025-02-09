import { Routes } from '@angular/router';
import { SignInComponent } from './features/sign-in/sign-in.component';

export const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'sign-in', component: SignInComponent },
];
