import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, Observable, tap } from "rxjs";
import { Fund } from "../models/fund";
import { FundPartner } from "../models/fund-partner";
import { PartnershipTransferEvent } from "../models/partnership-transfer-event";

@Injectable({
  providedIn: 'root'
})
export class PartnerAssignmentApiService {

  constructor(
    private http: HttpClient
  ) { }

  getAllFunds(): Observable<Fund[]> {
    return this.http.get<Fund[]>('api/funds');
  }

  getFundPartners(fund: Fund, performanceFee: string, managementFee: string, otherGP: string): Observable<FundPartner[]> {
    const options = { params: new HttpParams()
        .set('performanceFee', performanceFee)
        .set('managementFee', managementFee)
        .set('otherGP', otherGP)};
    return this.http.get<FundPartner[]>(`api/fund/${fund.id}/partners`, options);
  }

  enrichWithTransferEvents(partner: FundPartner): Observable<FundPartner> {
    return this.http.get<PartnershipTransferEvent[]>(`/api/fund/partner/${partner.id}/transfer-events`)
      .pipe(
        map(transferEvents => {
          partner.partnershipTransferEvents = transferEvents;
          return partner;
        })
      );
  }

}
