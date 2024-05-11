export default class Customer {
  private name: string;
  private id: string;

  constructor(name: string, id: string) {
    this.name = name;
    this.id = id;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getId(): string {
    return this.id;
  }

  setId(id: string): void {
    this.id = id;
  }
}
