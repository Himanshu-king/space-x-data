import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FilterButtonComponent } from "./dashboard/filter-button/filter-button.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SpinnerComponent } from "./shared/spinner/spinner.component";
import { LoadingInterceptor } from './services/loading.interceptor';
import { ResultCardsComponent } from './result-cards/result-cards.component';
import { SafePipe } from './shared/safe.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FilterButtonComponent,
    SpinnerComponent,
    ResultCardsComponent,
    SafePipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
