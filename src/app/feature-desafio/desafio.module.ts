import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { SharedModule } from "./../shared/shared.module";
import { DesafioRoutingModule } from "./desafio-routing.module";
import { HomePipesComponent } from "./views/home-pipes/home-pipes.component";
import { HomeValidatorsComponent } from "./views/home-validators/home-validators.component";
import { HomeComponent } from "./views/home/home.component";

@NgModule({
  declarations: [HomeComponent, HomePipesComponent, HomeValidatorsComponent],
  imports: [
    CommonModule,
    DesafioRoutingModule,
    SharedModule,
    RouterModule,
    FormsModule,
  ],
})
export class DesafioModule {}
