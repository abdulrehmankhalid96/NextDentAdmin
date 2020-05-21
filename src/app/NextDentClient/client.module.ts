import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClientRoutingModule } from "./client-routing.module";
import { ProfileSettingComponent } from "./profile-setting/profile-setting.component";
import { ClientPaymentComponent } from "./client-payment/client-payment.component";
import { ClientInvoiceComponent } from "./client-invoice/client-invoice.component";
import { ClientDashBoardComponent } from "./client-dash-board/client-dash-board.component";
import { ClientBranchesComponent } from "./client-branches/client-branches.component";

@NgModule({
  declarations: [
    ProfileSettingComponent,
    ClientPaymentComponent,
    ClientInvoiceComponent,
    ClientDashBoardComponent,
    ClientBranchesComponent,
  ],
  imports: [CommonModule, ClientRoutingModule],
})
export class ClientModule {}
