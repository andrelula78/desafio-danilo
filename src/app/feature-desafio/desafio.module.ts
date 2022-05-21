import { DesafioRoutingModule } from './desafio-routing.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HomeComponent } from "./views/home/home.component";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, DesafioRoutingModule],
})
export class DesafioModule {}
