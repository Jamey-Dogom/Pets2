import { Component, OnInit } from "@angular/core";
import { HttpService } from "./../http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-pet",
  templateUrl: "./new-pet.component.html",
  styleUrls: ["./new-pet.component.css"]
})
export class NewPetComponent implements OnInit {
  constructor(private _httpService: HttpService, private _router: Router) {}

  newPet = {
    name: "",
    type: "",
    description: "",
    skill1: "",
    skill2: "",
    skill3: ""
  };

  errors = [];
  flag: boolean = false;

  ngOnInit() {}

  createPet() {
    console.log(this.newPet.name);

    this._httpService.newPet(this.newPet).subscribe((data: any) => {
      if (data.hasOwnProperty("errors")) {
        this.errors = data.errors;
        console.log(this.errors);

        if (this.errors[0] == null) {
          this.flag = true;
          console.log(this.flag);
        }
      } else {
        this._router.navigate(["/pets"]);
        console.log("Pet created successfully...");
      }
    });
  }

  cancelHandler() {
    this._router.navigate(["/pets"]);
  }
}
