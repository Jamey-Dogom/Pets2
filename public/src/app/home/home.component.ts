import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pet: any
  liked = true

  constructor(private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params
      .subscribe((params: Params) => {
        this._httpService.getOne(params.id)
          .subscribe((data: any) => {
            this.pet = data
          })
      })
  }

  goHome() {
    this._router.navigate(['/pets']);
  }


  likeTrigger(LikedPet) {
    this.pet.likes += 1;
    this._httpService.updateJ(LikedPet._id, LikedPet)
    .subscribe(data => {
      this.liked = false;
      this._router.navigate(['pets/', this.pet._id])
    });
  }

  adoptPet(id) {
    this._httpService.adoptPet(id)
      .subscribe(() => {
        // this.allJerseys = this.allJerseys.filter(jersey => jersey._id != id)
      })
    this.goHome()
  }


}
