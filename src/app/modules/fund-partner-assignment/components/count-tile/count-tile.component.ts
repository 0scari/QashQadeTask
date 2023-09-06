import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-count-tile',
  templateUrl: './count-tile.component.html',
  styleUrls: ['./count-tile.component.css']
})
export class CountTileComponent {

  @Input() colorCode: string;
  @Input() count: number;
  @Input() label: string;

}
