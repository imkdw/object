import MenuItem from "./menu-item";

export default class Coffee {
  private name: string;
  private price: number;

  constructor(menuItem: MenuItem) {
    this.name = menuItem.getName();
    this.price = menuItem.getPrice();
  }
}
