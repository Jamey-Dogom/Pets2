import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  allPets = []

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.getAllPets()
  }

  getAllPets() {
    // calling our get Pokemon method and receive an observable
    let observable = this._httpService.getPets()
    observable.subscribe((data : any)=> {
      // put all shows from call into allShows array
      for(let pet of data){
        console.log(pet)
          this.allPets.push(pet)
      }
    })
  }

  // deleteJersey(id){
  //   this._httpService.deleteJersey(id)
  //     .subscribe(() => {
  //       // this.allJerseys = this.allJerseys.filter(jersey => jersey._id != id)
  //     })
  //     this.allJerseys = []
  //     this.getAllJerseys()
  // }

}
