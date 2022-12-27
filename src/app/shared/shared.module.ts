import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car1Component } from './components/car1/car1.component';
import { Car2Component } from './components/car2/car2.component';
import { Car3Component } from './components/car3/car3.component';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [
    Car1Component,
    Car2Component,
    Car3Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Car1Component,
    Car2Component,
    Car3Component,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
    
  ]
})
export class SharedModule { }
