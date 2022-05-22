import { HomeValidatorsComponent } from './views/home-validators/home-validators.component';
import { HomePipesComponent } from './views/home-pipes/home-pipes.component';
import { HomeComponent } from "./views/home/home.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path:"pipes",
    component:HomePipesComponent,
  },
  {
    path:"validators",
    component:HomeValidatorsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesafioRoutingModule {}
