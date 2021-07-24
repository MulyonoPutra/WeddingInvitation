import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WeddingComponent } from './wedding.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { AgmCoreModule } from '@agm/core';
import { GalleryComponent } from './gallery/gallery.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: WeddingComponent,
    children: [
      { path: '', component: HeroComponent },
      { path: 'home', component: HomeComponent },
      { path: 'location', component: LocationComponent },
      { path: 'gallery', component: GalleryComponent },
    ],
  },
];

@NgModule({
  declarations: [
    HeroComponent,
    WeddingComponent,
    HomeComponent,
    LocationComponent,
    GalleryComponent,
  ],
  imports: [
    NgbModule,
    CommonModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyC9jPs8mLaAjN-snYGBMaVJMpGhWO2myIQ',
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class WeddingModule {}
