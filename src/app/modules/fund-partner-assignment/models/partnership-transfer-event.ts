export interface PartnershipTransferEvent {
  id: string;
  fundPartnerId: string;
  type: TransferType;
  value: string;
  date: string;
}

export enum TransferType {
  Transferrer,
  Transferee
}
