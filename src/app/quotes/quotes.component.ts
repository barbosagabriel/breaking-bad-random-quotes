import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  quote$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getRandomQuote().subscribe(
      result => this.quote$ = result[0]
    )
  }

  getNewQuote(){
    this.ngOnInit();
  }

}
