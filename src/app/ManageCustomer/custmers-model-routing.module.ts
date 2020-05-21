import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NExtDentCustomersComponent } from "./next-dent-customers/next-dent-customers.component";
import { CustomerBranchesComponent } from "./customer-branches/customer-branches.component";
import { CustomerCareSystemComponent } from "./customer-care-system/customer-care-system.component";
import { PaymentPlaneComponent } from "./payment-plane/payment-plane.component";

const routes: Routes = [
  {
    path: "ManageCustomers",
    component: NExtDentCustomersComponent,
  },
  {
    path: "CustomerBranches",
    component: CustomerBranchesComponent,
  },
  {
    path: "CustomerCare",
    component: CustomerCareSystemComponent,
  },
  {
    path: "PaymentPlane",
    component: PaymentPlaneComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class CustmersModelRoutingModule {}
