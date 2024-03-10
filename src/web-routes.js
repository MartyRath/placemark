import { accountsController } from "./controllers/accounts-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import { provinceController} from "./controllers/province-controller.js";

export const webRoutes = [
  // Province
  { method: "GET", path: "/province/{title}", config: provinceController.index },
  { method: "POST", path: "/province/{title}/addusertree", config: provinceController.addUserTree },
  { method: "GET", path: "/province/{title}/deleteusertree/{treeid}", config: provinceController.deleteUserTree },
  
  //  Admin dash
  { method: "GET", path: "/admin", config: adminDashboardController.index },
  { method: "GET", path: "/admin/deleteuser/{id}", config: adminDashboardController.deleteUser },

  // About
  { method: "GET", path: "/about", config: aboutController.index },

  // Accounts
  { method: "GET", path: "/", config: accountsController.index },
  { method: "GET", path: "/signup", config: accountsController.showSignup },
  { method: "GET", path: "/login", config: accountsController.showLogin },
  { method: "GET", path: "/logout", config: accountsController.logout },
  { method: "POST", path: "/register", config: accountsController.signup },
  { method: "POST", path: "/authenticate", config: accountsController.login },

  // Dashboard
  { method: "GET", path: "/dashboard", config: dashboardController.index },

  // Public
  { method: "GET", path: "/{param*}", handler: { directory: { path: "./public" } }, options: { auth: false } }
];