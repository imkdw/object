import MenuItem from "./menu-item";

export default class Menu {
  private items: MenuItem[] = [];

  constructor(items: MenuItem[]) {
    this.items = items;
  }

  choose(name: string): MenuItem {
    const menu = this.items.find((item) => item.getName() === name);
    if (!menu) {
      throw new Error("존재하지 않는 메뉴입니다.");
    }

    return menu;
  }
}
