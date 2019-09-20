import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }


  // Get all shows
  getPets(){
    // our http response is an Observable, store it in a variable
    return this._http.get('/api/pets');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
 }

 getOne(id){
  // our http response is an Observable, store it in a variable
  return this._http.get('/api/pets/'+ id);
  // subscribe to the Observable and provide the code we would like to do with our data from the response
  // tempObservable.subscribe(data => console.log("Got 1 task", data));
}

  // Create One New Show
  addPet(newPet){
    return this._http.post('/api/pets', newPet)
  }

  adoptPet(PetId) {
    return this._http.delete('/api/pets/' + PetId)
  }

  updateJ(petID, pet){
    return this._http.put('/api/pets/' + petID, pet);
  }

  }