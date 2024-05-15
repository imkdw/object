export default class MenuItem {
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  cost() {
    return this.price;
  }
}
