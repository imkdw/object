import Money from "../../money";
import Screening from "../../screening";
import { DiscountCondition } from "../condition/discount-condition.interface";

/**
 * 가격 할인 정책
 */
export default abstract class DiscountPolicy {
  private conditions: DiscountCondition[] = [];

  /**
   * 할인조건은 여러개가 될수있음
   */
  constructor(...conditions: DiscountCondition[]) {
    this.conditions = conditions;
  }

  calculateDiscountAmount(screening: Screening): Money {
    for (const condition of this.conditions) {
      if (condition.isSatisfiedBy(screening)) {
        return this.getDiscountAmount(screening);
      }
    }

    return Money.ZERO;
  }

  protected abstract getDiscountAmount(screening: Screening): Money;
}
