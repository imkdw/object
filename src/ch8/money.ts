/**
 * 금액과 관련된 다양한 계산을 구현하는 클래스
 */
export default class Money {
  static readonly ZERO = Money.wons(0);
  private readonly amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  plus(amount: Money): Money {
    return new Money(this.amount + amount.amount);
  }

  minus(amount: Money): Money {
    return new Money(this.amount - amount.amount);
  }

  times(percent: number): Money {
    return new Money(this.amount * percent);
  }

  isLessThan(other: Money): boolean {
    return this.amount < other.amount;
  }

  isGreaterThanOrEqual(other: Money): boolean {
    return this.amount >= other.amount;
  }

  static wons(amount: number): Money {
    return new Money(amount);
  }
}
