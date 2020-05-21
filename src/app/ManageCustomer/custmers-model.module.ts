import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { CustmersModelRoutingModule } from "./custmers-model-routing.module";
import { NExtDentCustomersComponent } from "./next-dent-customers/next-dent-customers.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CustomerBranchesComponent } from "./customer-branches/customer-branches.component";
import { CustomerCareSystemComponent } from "./customer-care-system/customer-care-system.component";
import { PaymentPlaneComponent } from './payment-plane/payment-plane.component';

@NgModule({
  declarations: [
    NExtDentCustomersComponent,
    CustomerBranchesComponent,
    CustomerCareSystemComponent,
    PaymentPlaneComponent,
  ],
  imports: [
    CommonModule,
    CustmersModelRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
})
export class CustmersModelModule {}
