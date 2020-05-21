import { INavData } from "@coreui/angular";

export const navItemsForClient: INavData[] = [
  {
    url: "/NextdentClient/ClientBranches",
    name: "Client Branches",
    icon: "icon-shuffle",
  },
  {
    url: "/NextdentClient/ClientDashBoard",
    name: "Client DashBoard",
    icon: "icon-book-open",
  },
  {
    url: "/NextdentClient/ClientInvoice",
    name: "Client Invoice",
    icon: "icon-doc",
  },
  {
    url: "/NextdentClient/ClientPayment",
    name: "Client Payment",
    icon: "icon-notebook",
  },

  {
    url: "/NextdentClient/ProfileSetting",
    name: "Profile Setting",
    icon: "icon-settings",
  },
];

export const navItemsForAdmin: INavData[] = [
  {
    name: "Customer Managment",
    url: "/Manage/ManageCustomers",
    icon: "icon-drop",
  },
  {
    name: "Customer Branches",
    url: "/Manage/CustomerBranches",
    icon: "icon-drop",
  },
  {
    name: "Payment Plane",
    url: "/Manage/PaymentPlane",
    icon: "icon-drop",
  },
];
