import { Component, Input } from '@angular/core';
import { FundPartner } from "../../models/fund-partner";
import { TransferType } from "../../models/partnership-transfer-event";

@Component({
  selector: 'app-fund-partner-assignment-table',
  templateUrl: './fund-partner-assignment-table.component.html',
  styleUrls: ['./fund-partner-assignment-table.component.css']
})
export class FundPartnerAssignmentTableComponent {
  @Input() partners: FundPartner[];

  protected readonly TransferType = TransferType;
}
