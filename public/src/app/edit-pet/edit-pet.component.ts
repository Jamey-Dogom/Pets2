import { Component, OnInit } from "@angular/core";
import { HttpService } from "./../http.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-edit-pet",
  templateUrl: "./edit-pet.component.html",
  styleUrls: ["./edit-pet.component.css"]
})
export class EditPetComponent implements OnInit {
  pet = null;
  errors = [];
  flag: boolean = false;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this._httpService.getPet(params.id).subscribe((data: any) => {
        this.pet = data.pet;
        console.log("Pet to edit: ", this.pet);
        this.flag = false;
      });
    });
  }

  editPet() {
    console.log(this.pet.name);

    this._httpService
      .updatePet(this.pet._id, this.pet)
      .subscribe((data: any) => {
        if (data.hasOwnProperty("errors")) {
          this.errors = data.errors;
          console.log(this.errors);

          if (this.errors[0] == null) {
            this.flag = true;
            console.log(this.flag);
          }
        } else {
          this._router.navigate(["/pets/" + this.pet._id]);
          console.log("Pet edited successfully...");
        }
      });
  }

  cancelHandler() {
    this._router.navigate(["/pets/" + this.pet._id]);
  }
}
