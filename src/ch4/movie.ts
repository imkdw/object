import DiscountCondition from "./discount-condition";
import DayOfWeek from "./enums/day-of-week.enum";
import DiscountConditionType from "./enums/discount-condition.enum";
import MovieType from "./enums/movie-type.enum";
import Money from "./money";

export default class Movie {
  private title: string;
  private runningTime: number;
  private fee: Money;
  private discountConditions: DiscountCondition[];

  private movieType: MovieType;
  private discountAmount: Money;
  private discountPercent: number;

  getMovieType(): MovieType {
    return this.movieType;
  }

  setMovieType(movieType: MovieType): void {
    this.movieType = movieType;
  }

  getFee(): Money {
    return this.fee;
  }

  setFee(fee: Money): void {
    this.fee = fee;
  }

  getDiscountConditions(): DiscountCondition[] {
    return this.discountConditions;
  }

  setDiscountConditions(discountConditions: DiscountCondition[]): void {
    this.discountConditions = discountConditions;
  }

  getDiscountAmount(): Money {
    return this.discountAmount;
  }

  setDiscountAmount(discountAmount: Money): void {
    this.discountAmount = discountAmount;
  }

  getDiscountPercent(): number {
    return this.discountPercent;
  }

  setDiscountPercent(discountPercent: number): void {
    this.discountPercent = discountPercent;
  }

  calculateAmountDiscountedFee(): Money {
    if (this.movieType !== MovieType.AMOUNT_DISCOUNT) {
      throw new Error("IllegalArgumentException");
    }

    return this.fee.minus(this.discountAmount);
  }

  calculatePercentDiscountedFee(): Money {
    if (this.movieType !== MovieType.PERCENT_DISCOUNT) {
      throw new Error("IllegalArgumentException");
    }

    return this.fee.times(this.discountPercent);
  }

  calculateNoneDiscountedFee(): Money {
    if (this.movieType !== MovieType.NONE_DISCOUNT) {
      throw new Error("IllegalArgumentException");
    }

    return this.fee;
  }

  isDiscountable(whenScreened: Date, sequence: number): boolean {
    for (const condition of this.discountConditions) {
      if (condition.getType() === DiscountConditionType.PERIOD) {
        if (condition.isDiscountable(DayOfWeek.FRIDAY, whenScreened)) {
          return true;
        }
      } else {
        if (condition.isDiscountable(sequence)) {
          return true;
        }
      }
    }
    return false;
  }
}
