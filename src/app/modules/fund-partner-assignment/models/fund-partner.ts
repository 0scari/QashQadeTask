import { PartnershipTransferEvent } from "./partnership-transfer-event";

export interface FundPartner {
  id: string;
  type: string;
  name: string;
  identifier: string;
  assignmentDate: string;
  fundId: string;
  partnershipTransferEvents: PartnershipTransferEvent[];
}
