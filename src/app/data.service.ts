import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRandomQuote(){
    return this.http.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
  }
}
