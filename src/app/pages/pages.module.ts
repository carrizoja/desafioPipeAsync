import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreetPageComponent } from './street-page/street-page.component';
import { SharedModule } from '../shared/shared.module';
import { AnimesPageComponent } from './animes-page/animes-page.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StreetPageComponent,
    AnimesPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    StreetPageComponent,
    AnimesPageComponent
    
  ]
})
export class PagesModule { }
