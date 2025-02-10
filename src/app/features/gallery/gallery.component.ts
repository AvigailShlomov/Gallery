import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-gallery',
  imports: [RouterOutlet],
  template: `<router-outlet/>`,
})
export class GalleryComponent {

}
