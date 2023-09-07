import { Component, EventEmitter, Input, Output } from '@angular/core';

export class FundPartnerFilterOption<T> {
  label: string;
  value: T;
}

@Component({
  selector: 'app-fund-partner-filter',
  templateUrl: './fund-partner-filter.component.html',
  styleUrls: ['./fund-partner-filter.component.css']
})
export class FundPartnerFilterComponent {
  @Input() label: string;
  @Input() options: FundPartnerFilterOption<any>[];
  @Output() optionChanged: EventEmitter<any> = new EventEmitter();

  emitOptionValue(value: any): void {
    console.log(value)
    this.optionChanged.emit(value);
  }
}
