import { Component, OnInit } from "@angular/core";
import { HttpService } from "./../http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-all-pets",
  templateUrl: "./all-pets.component.html",
  styleUrls: ["./all-pets.component.css"]
})
export class AllPetsComponent implements OnInit {
  pets = [];
  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit() {
    this._httpService.getPets().subscribe((data: any) => {
      // console.log("data: ", data);
      this.pets = data.data;
      // console.log("pets: ", this.pets);
    });
  }

  goToEdit(id) {
    this._router.navigate(["/pets/", id, "edit"]);
  }

  goToDetails(id) {
    this._router.navigate(["/pets/", id]);
  }
}
