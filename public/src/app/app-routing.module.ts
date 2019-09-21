import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllPetsComponent } from "./all-pets/all-pets.component";
import { NewPetComponent } from "./new-pet/new-pet.component";
import { EditPetComponent } from "./edit-pet/edit-pet.component";
import { PetDetailsComponent } from "./pet-details/pet-details.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "pets/:id/edit",
    component: EditPetComponent
  },
  {
    path: "pets",
    component: AllPetsComponent
  },
  {
    path: "pets/new",
    component: NewPetComponent
  },
  
  {
    path: "pets/:id",
    component: PetDetailsComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/pets"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
