import Money from "../../money";
import Screening from "../../screening";
import { DiscountCondition } from "../condition/discount-condition.interface";
import DiscountPolicy from "./discount-policy";

/**
 * 가격 할인 정책
 */
export default class AmountDiscountPolicy extends DiscountPolicy {
  private discountAmount: Money;

  constructor(discountAmount: Money, ...conditions: DiscountCondition[]) {
    super(...conditions);
    this.discountAmount = discountAmount;
  }

  protected getDiscountAmount(screening: Screening): Money {
    return this.discountAmount;
  }
}
