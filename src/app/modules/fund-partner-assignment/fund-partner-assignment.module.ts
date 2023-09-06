import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundPartnerAssignmentComponent } from './components/fund-partner-assignment/fund-partner-assignment.component';
import { CountTileComponent } from "./components/count-tile/count-tile.component";



@NgModule({
  declarations: [
    FundPartnerAssignmentComponent,
    CountTileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FundPartnerAssignmentModule { }
