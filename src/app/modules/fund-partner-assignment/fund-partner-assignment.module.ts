import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundPartnerAssignmentComponent } from './components/fund-partner-assignment/fund-partner-assignment.component';
import { CountTileComponent } from "./components/count-tile/count-tile.component";
import { FundPartnerFilterComponent } from './components/fund-partner-filter/fund-partner-filter.component';



@NgModule({
  declarations: [
    FundPartnerAssignmentComponent,
    CountTileComponent,
    FundPartnerFilterComponent
  ],
  exports: [ FundPartnerAssignmentComponent ],
  imports: [
    CommonModule
  ]
})
export class FundPartnerAssignmentModule { }
