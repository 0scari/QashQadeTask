import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Fund } from "../models/fund";

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

}
