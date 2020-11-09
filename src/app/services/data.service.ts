import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { FlightData } from "../shared/flight-data.model";

const API_PREFIX = "https://api.spaceXdata.com/v3/launches?limit=100";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}

  /**
   * Get all spacXdata
   */

  getAllLaunches(): Observable<FlightData[]> {
    return this.http.get<FlightData[]>(API_PREFIX, {}).pipe(
      map((data) => this.formatData(data)),
      catchError(this.handleError)
    );
  }

  // Launch & Land Success/Failure Filter
  getFilterData(query: string): Observable<FlightData[]> {
    return this.http.get(`${API_PREFIX}&${query}`, {}).pipe(
      map((data) => this.formatData(data)),
      catchError(this.handleError)
    );
  }

  formatData(data): FlightData[] {
    return data.map((item) => {
      const modifiedData: FlightData = {
        flight_number: item.flight_number,
        mission_id: item.mission_id,
        mission_name: item.mission_name,
        launch_year: item.launch_year,
        launch_success: item.launch_success,
        land_success: item.launch_success
          ? item.rocket.first_stage.cores[0].land_success
          : false,
         image_link: item.links.mission_patch_small,
      };
      return modifiedData;
    });
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
