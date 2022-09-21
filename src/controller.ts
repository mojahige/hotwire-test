import { Controller } from "@hotwired/stimulus";
import { CONTROLLER_CONNECTED_DATA_ATTR } from "./constants.js";

export default class extends Controller {
  connect() {
    this.element.setAttribute(CONTROLLER_CONNECTED_DATA_ATTR, "");
  }
}
