import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Fund } from "../models/fund";
import { FundPartner } from "../models/fund-partner";

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

  getFundPartners(fund: Fund): Observable<FundPartner[]> {
    return this.http.get<FundPartner[]>(`api/fund/${fund.id}/partners`);
  }

}
