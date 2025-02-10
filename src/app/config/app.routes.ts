import { Routes } from '@angular/router';
import { SignInComponent } from '../features/sign-in/sign-in.component';
import { GalleryRoutes } from '../features/gallery/gallery.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' }, //when we redirect from empty string we wont use prefix- since its the start of any url segment
  GalleryRoutes,
  { path: 'sign-in', component: SignInComponent },
];
