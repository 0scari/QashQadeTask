import { Component, EventEmitter, Input, Output } from '@angular/core';

export class FundPartnerFilterOption<T> {
  label: string;
  value: T;

  constructor(label: string, value: T) {
    this.label = label;
    this.value = value;
  }
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
    this.optionChanged.emit(value);
  }
}
