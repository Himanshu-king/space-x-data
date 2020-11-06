import { Component, OnInit } from "@angular/core";
import { SpinnerService } from "../../services/spinner.service";

@Component({
  selector: "app-spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.css"],
})
export class SpinnerComponent implements OnInit {
  public loading: boolean;

  constructor(private loaderService: SpinnerService) {}

  ngOnInit() {
    this.loaderService.loaderState.subscribe((loaderState) => {
      this.loading = loaderState;
    });
  }
}
