import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { DesafioRoutingModule } from './desafio-routing.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HomeComponent } from "./views/home/home.component";
import { HomePipesComponent } from './views/home-pipes/home-pipes.component';
import { HomeValidatorsComponent } from './views/home-validators/home-validators.component';

@NgModule({
  declarations: [HomeComponent, HomePipesComponent, HomeValidatorsComponent],
  imports: [CommonModule, DesafioRoutingModule, SharedModule, RouterModule],
})
export class DesafioModule {}
