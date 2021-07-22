import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WeddingComponent } from './wedding.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: WeddingComponent,
    children: [
      { path: '', component: HeroComponent },
      { path: 'home', component: HomeComponent },
    ],
  },
];

@NgModule({
  declarations: [HeroComponent, WeddingComponent, HomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WeddingModule {}
