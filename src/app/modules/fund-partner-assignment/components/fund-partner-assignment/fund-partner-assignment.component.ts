import { Component, OnInit } from '@angular/core';
import { TileColor } from "../count-tile/count-tile.component";
import { FundPartnerFilterOption } from "../fund-partner-filter/fund-partner-filter.component";
import { Fund } from "../../models/fund";
import { PartnerAssignmentApiService } from "../../services/partner-assignment-api.service";

enum Filter {
  Fund = 'fund',
  PerformanceFee = 'performanceFee',
  ManagementFee = 'managementFee',
  OtherGP = 'otherGP'
}

@Component({
  selector: 'app-fund-partner-assignment',
  templateUrl: './fund-partner-assignment.component.html',
  styleUrls: ['./fund-partner-assignment.component.css']
})
export class FundPartnerAssignmentComponent implements OnInit {

  protected readonly TileColor = TileColor; // implements access in the template
  protected readonly Filter = Filter;

  readonly commonFilterOptions: FundPartnerFilterOption<boolean>[] = [
    {label: 'Yes', value: true},
    {label: 'No', value: false}
  ]
  fundFilterOptions: FundPartnerFilterOption<Fund>[];

  filters = {
    [Filter.Fund]: undefined,
    [Filter.PerformanceFee]: undefined,
    [Filter.ManagementFee]: undefined,
    [Filter.OtherGP]: undefined,
  }

  constructor(private apiService: PartnerAssignmentApiService) {
  }

  ngOnInit(): void {
    this.apiService.getAllFunds().subscribe(funds => {
      this.fundFilterOptions = funds?.map(fund => new FundPartnerFilterOption<Fund>(fund.name, fund))
    })
  }

  setFilter(filter: Filter, value: any): void {
    this.filters[filter] = value;
    this.refreshViewsIfFiltersAreSet();
  }


  private refreshViewsIfFiltersAreSet() {
    let shouldRefresh = true;
    for (let filter in this.filters) {
      if (!this.filters[filter as Filter]) {
        shouldRefresh = false;
      }
    }
    if (shouldRefresh) {
      this.refreshViews();
    }
  }

  private refreshViews() {
    console.log('all set')
  }

}
