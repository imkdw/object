import Baristar from "./baristart";
import Menu from "./menu";

export default class Customer {
  order(menuName: string, menu: Menu, baristar: Baristar) {
    const menuItem = menu.choose(menuName);
    const coffee = baristar.makeCoffee(menuItem);
  }
}
