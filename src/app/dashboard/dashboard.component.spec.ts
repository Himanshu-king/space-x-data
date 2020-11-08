import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from "@angular/router";
import { of, Subject } from "rxjs";
import { MockLaunchData } from "src/assets/mock/testinMock";
import { ResultCardsComponent } from "../result-cards/result-cards.component";
import { DataService } from "../services/data.service";
import { SafePipe } from "../shared/safe.pipe";

import { DashboardComponent } from "./dashboard.component";
import { FilterButtonComponent } from "./filter-button/filter-button.component";

class RouterStub {
  navigate(params: any) { }
}
class ActivatedRouteStub {
  private subject = new Subject();

  push(value: any) {
    this.subject.next(value);
    this.subject.complete();
  }

  get queryParams() {
    return this.subject.asObservable();
  }
}

describe("DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let dataService;
  let router;
  let route;

  const allLaunchdata = JSON.parse(JSON.stringify(MockLaunchData));

  beforeEach(async(() => {
    const dataServiceSpy = jasmine.createSpyObj("DataService", [
      "getAllLaunches",
      "getFilterData",
    ]);
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        FilterButtonComponent,
        ResultCardsComponent,
        SafePipe,
      ],
      providers: [
        { provide: DataService, useValue: dataServiceSpy },
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        dataService = TestBed.get(DataService);
        router = TestBed.get(Router);
        route = TestBed.get(ActivatedRoute);
        component = fixture.componentInstance;

        dataService.getAllLaunches.and.returnValue(of(allLaunchdata));
        dataService.getFilterData.and.returnValue(of(allLaunchdata));
        fixture.detectChanges();
      });
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should load all launch data if no params in the URL", () => {


    const applyFilterSpy = spyOn(component, 'applyFilter').and.callThrough();
    const getFilteredResultsSpy = spyOn(component, 'getFilteredResults').and.callThrough();
    const checkNullObjectSpy = spyOn(component, 'checkNullObject').and.callThrough();

    route.push({});
    fixture.detectChanges();


    expect(applyFilterSpy).not.toHaveBeenCalled();
    expect(getFilteredResultsSpy).not.toHaveBeenCalled();
    expect(checkNullObjectSpy).not.toHaveBeenCalled();
  });

  it("should load all launch data if existing filter params in the URL", () => {
    const params = {
      launch_year: 2007,
      launch_success: true,
      land_success: false,
    };

    const applyFilterSpy = spyOn(component, 'applyFilter').and.callThrough();
    const getFilteredResultsSpy = spyOn(component, 'getFilteredResults').and.callThrough();
    const checkNullObjectSpy = spyOn(component, 'checkNullObject').and.callThrough();

    route.push(params);
    fixture.detectChanges();

    expect(applyFilterSpy).toHaveBeenCalledWith(params);
    expect(getFilteredResultsSpy).toHaveBeenCalled();
    expect(checkNullObjectSpy).toHaveBeenCalled();
  });

});
