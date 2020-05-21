import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "./../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AppServiceService {
  public baseurl = environment.BaseUrl;
  constructor(public http: HttpClient) {}
  public login = (obj): Observable<any> => {
    return this.http.post(this.baseurl + "Admin/LoginUserAdmin", obj);
  };
  Addcustomer = (obj): Observable<any[]> => {
    return this.http.post<any[]>(this.baseurl + "Admin/AddNewCustomer", obj);
  };
  public getAllCustomers = (obj): Observable<any[]> => {
    return this.http.post<any[]>(this.baseurl + "Admin/GetAllCustomers", obj);
  };
  public GetBranchesStatus = (obj): Observable<any[]> => {
    return this.http.post<any[]>(this.baseurl + "Admin/GetBranchesStatus", obj);
  };
  public AddBranch = (obj): Observable<any[]> => {
    return this.http.post<any[]>(`${this.baseurl}Admin/AddCustomerBranch`, obj);
  };
  public GetBranch = (obj): Observable<any[]> => {
    return this.http.post<any[]>(`${this.baseurl}Admin/GetAllBranches`, obj);
  };
  public updateBranch = (obj): Observable<any[]> => {
    return this.http.post<any[]>(
      `${this.baseurl}Admin/UpdateCustomerBranch`,
      obj
    );
  };
  public AddpaymentPlane = (obj): Observable<any[]> => {
    return this.http.post<any[]>(`${this.baseurl}Admin/AddPaymentPlan`, obj);
  };
  public GetpaymentPlane = (obj): Observable<any[]> => {
    return this.http.post<any[]>(
      `${this.baseurl}Admin/GetAllPaymentPlans`,
      obj
    );
  };
  public UpdatepaymentPlane = (obj): Observable<any[]> => {
    return this.http.post<any[]>(`${this.baseurl}Admin/UpdatePaymentPlan`, obj);
  };
  public UpdateCustomer = (obj) => {
    return this.http.post<any[]>(`${this.baseurl}Admin/UpdateCustomer`, obj);
  };
}
