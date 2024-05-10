import Money from "../../money";
import DiscountPolicy from "./discount-policy";

export default class NoneDiscountPolicy extends DiscountPolicy {
  protected override getDiscountAmount(): Money {
    return Money.ZERO;
  }
}
