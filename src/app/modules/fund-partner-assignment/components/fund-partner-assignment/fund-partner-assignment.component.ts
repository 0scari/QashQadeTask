import { Component, OnInit } from '@angular/core';
import { TileColor } from "../count-tile/count-tile.component";
import { FundPartnerFilterOption } from "../fund-partner-filter/fund-partner-filter.component";
import { Fund } from "../../models/fund";
import { PartnerAssignmentApiService } from "../../services/partner-assignment-api.service";
import { FundPartner } from "../../models/fund-partner";

enum Filter {
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
  fundFilterOptions: FundPartnerFilterOption<string>[];

  filters = {
    [Filter.PerformanceFee]: undefined,
    [Filter.ManagementFee]: undefined,
    [Filter.OtherGP]: undefined,
  }

  allFunds: Fund[];
  selectedFund: Fund | undefined;
  fundPartners: FundPartner[];
  totalTransferEventCount: number;

  constructor(private apiService: PartnerAssignmentApiService) {
  }

  ngOnInit(): void {
    this.apiService.getAllFunds().subscribe(funds => {
      this.allFunds = funds;
      this.fundFilterOptions = funds?.map(fund => new FundPartnerFilterOption<string>(fund.name, fund.id))
    })
  }

  setSelectedFund(fundId: string): void {
    this.selectedFund = this.allFunds.find(fund => fund.id === fundId);
    this.refreshViewsIfFiltersAreSet();
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
    if (this.selectedFund && shouldRefresh) {
      console.debug('Refreshing views')
      this.refreshViews();
    }
  }

  private refreshViews() {
    this.apiService.getFundPartners(this.selectedFund as Fund).subscribe(partners => {
      this.fundPartners = partners;
    });
  }

}
