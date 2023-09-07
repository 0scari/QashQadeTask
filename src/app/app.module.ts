import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FundPartnerAssignmentModule } from "./modules/fund-partner-assignment/fund-partner-assignment.module";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ], // enables use of <ion-icon> tags, TODO: narrow down to only that tag
  imports: [
    BrowserModule,
    HttpClientModule,
    FundPartnerAssignmentModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
