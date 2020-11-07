import { Component, Input, OnInit } from "@angular/core";
import { FlightData } from '../shared/flight-data.model';

@Component({
  selector: "app-result-cards",
  templateUrl: "./result-cards.component.html",
  styleUrls: ["./result-cards.component.css"],
})
export class ResultCardsComponent implements OnInit {
  @Input() launchData: FlightData;
  constructor() {}

  ngOnInit() {}
}
