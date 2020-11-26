import { TestBed } from "@angular/core/testing";

import { DataService } from "./data.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

const allLaunchData = require("../../assets/mock/getAllLaunchData.json");

describe("DataService", () => {
  let service: DataService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.get(DataService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should call getFilterData", () => {
    const query = "launch_success=true";
    service.getFilterData(query).subscribe((value: any) => {
      expect(value[0].flight_number).toEqual(1);
    });
    const API_PREFIX = "https://api.spaceXdata.com/v3/launches?limit=100";
    const req = httpTestingController.expectOne(`${API_PREFIX}&${query}`);
    expect(req.request.method).toBe("GET");

    req.flush(allLaunchData);

    httpTestingController.verify();
  });
});
