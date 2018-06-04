import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SolutionsHistory} from "../models/SolutionsHistory";

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  // httpLink = 'http://localhost:8080/';
  httpLink = 'https://solutions-registry-back.herokuapp.com/';

  constructor(private http: HttpClient) { }


  getMethods() {
    return this.http
      .get(this.httpLink + '/getMethods')
      .toPromise();
  }

  getFullMethodById(id) {
    return this.http.get(this.httpLink + '/fullmethod/' + id).toPromise();
  }

  createNewEntry(solutionsHistory: SolutionsHistory) {
    return this.http.post(this.httpLink + '/createentry', solutionsHistory).toPromise();
  }

  fetchSolutionsHistory() {
    return this.http.get(this.httpLink + '/getentries' ).toPromise();
  }
}
