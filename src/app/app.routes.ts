import {
  FundPartnerAssignmentComponent
} from "./modules/fund-partner-assignment/components/fund-partner-assignment/fund-partner-assignment.component";
import { Routes } from "@angular/router";

export const appRoutes: Routes = [
  { path: '**', component: FundPartnerAssignmentComponent } // ** route just for demo purpose
];
