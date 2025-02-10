import { Component } from '@angular/core';
import { GalleryComponent } from './gallery.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { ImageDetailsComponent } from './image-details/image-details.component';

export const GalleryRoutes = {
  path: 'gallery',
  component: GalleryComponent,
  children: [
    { path: '', component: GalleryListComponent },
    { path: ':id', component: ImageDetailsComponent },
  ],
};
