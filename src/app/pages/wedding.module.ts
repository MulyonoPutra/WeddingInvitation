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
import { GalleryComponent } from './gallery/gallery.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";
import { ConfirmationListComponent } from './confirmation/confirmation-list/confirmation-list.component';
import { ConfirmationService } from '../core/service/confirmation.service';
import { FormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';

const routes: Routes = [
  {
    path: '',
    component: WeddingComponent,
    children: [
      { path: '', component: HeroComponent },
      { path: 'home', component: HomeComponent },
      { path: 'location', component: LocationComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'confirmation', component: ConfirmationComponent },
      { path: 'confirmation-list', component: ConfirmationListComponent },
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
    ConfirmationComponent,
    ConfirmationListComponent,
  ],
  imports: [
    NgbModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyC9jPs8mLaAjN-snYGBMaVJMpGhWO2myIQ',
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [
    ConfirmationService,
    { provide: ToastrService },
  ],
})
export class WeddingModule {}
