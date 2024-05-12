import { assert } from "console";
import Rectangle from "./rectangle";
import Square from "./square";

const resize = (rectangle: Rectangle, width: number, height: number) => {
  rectangle.setWidth(width);
  rectangle.setHeight(height);
  assert(rectangle.getWidth() === width && rectangle.getHeight() === height);
};

const rectangle = new Rectangle(10, 10, 100, 100);
resize(rectangle, 100, 200);
console.log(rectangle);

const square = new Square(10, 10, 100);
resize(square, 50, 100);
console.log(square);
