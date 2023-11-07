import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SharedModule } from '../shared/shared.module';
import {MatSelectModule} from '@angular/material/select';

import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    HomeComponent,
  
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    SharedModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule
  ]
})
export class LayoutsModule { }
