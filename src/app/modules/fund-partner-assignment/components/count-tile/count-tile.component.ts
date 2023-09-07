import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-count-tile',
  templateUrl: './count-tile.component.html',
  styleUrls: ['./count-tile.component.css']
})
export class CountTileComponent {

  @Input() color: string;
  @Input() count: number;
  @Input() label: string;

}

export enum TileColor {
  Red = '#b70f0a',
  Blue = '#0844a4'
}
