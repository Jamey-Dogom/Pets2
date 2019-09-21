import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HttpService } from "./http.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NewPetComponent } from "./new-pet/new-pet.component";
import { EditPetComponent } from "./edit-pet/edit-pet.component";
import { PetDetailsComponent } from "./pet-details/pet-details.component";
import { AllPetsComponent } from "./all-pets/all-pets.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    NewPetComponent,
    EditPetComponent,
    PetDetailsComponent,
    AllPetsComponent,
    PageNotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
