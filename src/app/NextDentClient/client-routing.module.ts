import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClientBranchesComponent } from "./client-branches/client-branches.component";
import { ClientDashBoardComponent } from "./client-dash-board/client-dash-board.component";
import { ClientInvoiceComponent } from "./client-invoice/client-invoice.component";
import { ClientPaymentComponent } from "./client-payment/client-payment.component";
import { ProfileSettingComponent } from "./profile-setting/profile-setting.component";

const routes: Routes = [
  {
    path: "ClientBranches",
    component: ClientBranchesComponent,
  },
  {
    path: "ClientDashBoard",
    component: ClientDashBoardComponent,
  },
  {
    path: "ClientInvoice",
    component: ClientInvoiceComponent,
  },
  {
    path: "ClientPayment",
    component: ClientPaymentComponent,
  },

  {
    path: "ProfileSetting",
    component: ProfileSettingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
