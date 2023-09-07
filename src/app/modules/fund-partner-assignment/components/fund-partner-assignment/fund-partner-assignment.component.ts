import { Component, OnInit } from '@angular/core';
import { TileColor } from "../count-tile/count-tile.component";
import { FundPartnerFilterOption } from "../fund-partner-filter/fund-partner-filter.component";
import { Fund } from "../../models/fund";
import { PartnerAssignmentApiService } from "../../services/partner-assignment-api.service";
import { FundPartner } from "../../models/fund-partner";
import { concatAll, forkJoin, map, of, switchMap } from "rxjs";

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
    [Filter.PerformanceFee]: '',
    [Filter.ManagementFee]: '',
    [Filter.OtherGP]: '',
  }

  allFunds: Fund[];
  selectedFund: Fund | undefined;
  fundPartners: FundPartner[] | undefined;
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
      if (!this.filters[filter as Filter].length) {
        shouldRefresh = false;
      }
    }
    if (this.selectedFund && shouldRefresh) {
      console.debug('Refreshing views')
      this.refreshViews();
    }
  }

  private refreshViews() {
    this.apiService.getFundPartners(this.selectedFund as Fund, this.filters[Filter.PerformanceFee], this.filters[Filter.PerformanceFee], this.filters[Filter.PerformanceFee])
      .pipe(
        map(partners => {
          return forkJoin(partners.map(partner => this.apiService.enrichWithTransferEvents(partner)));
        }),
        concatAll()
      )
      .subscribe(partners => {
        this.fundPartners = partners;
        this.totalTransferEventCount = partners.reduce((count, partner) => count + partner.partnershipTransferEvents?.length, 0);
    });
  }

}
