import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { SafePipe } from "../shared/safe.pipe";

import { ResultCardsComponent } from "./result-cards.component";

describe("ResultCardsComponent", () => {
  let component: ResultCardsComponent;
  let fixture: ComponentFixture<ResultCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultCardsComponent, SafePipe],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ResultCardsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
