import Coffee from "./coffee";
import MenuItem from "./menu-item";

export default class Baristar {
  makeCoffee(menuItem: MenuItem) {
    return new Coffee(menuItem);
  }
}
