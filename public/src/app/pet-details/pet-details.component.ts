import { Component, OnInit } from "@angular/core";
import { HttpService } from "./../http.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-pet-details",
  templateUrl: "./pet-details.component.html",
  styleUrls: ["./pet-details.component.css"]
})
export class PetDetailsComponent implements OnInit {
  pet = null;
  liked: boolean = false;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this._httpService.getPet(params.id).subscribe((data: any) => {
        this.pet = data.pet;
        console.log("Found pet: ", this.pet);
      });
    });

    // this.like = false;
  }

  adoptPet() {
    console.log("trying to delete...", this.pet._id);
    this._httpService
      .deletePet(this.pet._id)
      .subscribe((data: any) => console.log("deleted successfully", data));
    this._router.navigate(["/pets"]);
  }

  likePet() {
    this.liked = true;
    this.pet.likes += 1;
    this._httpService
      .updatePet(this.pet._id, this.pet)
      .subscribe((data: any) => {
        console.log("Pet liked successfully...", data);
      });
  }
}
