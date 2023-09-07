import { Component } from '@angular/core';
import { TileColor } from "../count-tile/count-tile.component";

@Component({
  selector: 'app-fund-partner-assignment',
  templateUrl: './fund-partner-assignment.component.html',
  styleUrls: ['./fund-partner-assignment.component.css']
})
export class FundPartnerAssignmentComponent {

  protected readonly TileColor = TileColor;
}
