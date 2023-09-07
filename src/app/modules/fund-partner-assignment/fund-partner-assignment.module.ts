import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundPartnerAssignmentComponent } from './components/fund-partner-assignment/fund-partner-assignment.component';
import { CountTileComponent } from "./components/count-tile/count-tile.component";
import { FundPartnerFilterComponent } from './components/fund-partner-filter/fund-partner-filter.component';
import { FundPartnerAssignmentTableComponent } from './components/fund-partner-assignment-table/fund-partner-assignment-table.component';



@NgModule({
  declarations: [
    FundPartnerAssignmentComponent,
    CountTileComponent,
    FundPartnerFilterComponent,
    FundPartnerAssignmentTableComponent
  ],
  exports: [ FundPartnerAssignmentComponent ],
  imports: [
    CommonModule
  ]
})
export class FundPartnerAssignmentModule { }
