import Rectangle from "./rectangle";

export default class Square extends Rectangle {
  constructor(x: number, y: number, size: number) {
    super(x, y, size, size);
  }

  override setWidth(width: number): void {
    super.setWidth(width);
    super.setHeight(width);
  }

  override setHeight(height: number): void {
    super.setHeight(height);
    super.setWidth(height);
  }
}
