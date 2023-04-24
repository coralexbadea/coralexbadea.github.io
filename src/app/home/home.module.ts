import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { WriteCodeComponent } from './pages/write-code/write-code.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AuxiliaryComponent } from './pages/auxiliary/auxiliary.component';

@NgModule({
  declarations: [HomeComponent, WriteCodeComponent, AuxiliaryComponent],
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule],
})
export class HomeModule {}
