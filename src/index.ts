import * as Turbo from "@hotwired/turbo";
import { Application } from "@hotwired/stimulus";
import DropdownMenuController from "./controllers/dropdown_menu_controller.js.js";

const register = () => {
  const app = Application.start();

  app.register("dropdown-menu", DropdownMenuController);
};

const main = () => {
  Turbo.start();
  register();
};

main();
