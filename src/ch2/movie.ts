import Screening from "./screening";
import AmountDiscountPolicy from "./discount/policy/amount-discount-policy";
import SequenceCondition from "./discount/condition/sequence-condition";
import PercentDiscountPolicy from "./discount/policy/percent-discount-policy";
import PeriodCondition from "./discount/condition/period-condition";
import DayOfWeek from "./enums/day-of-week";
import LocalDate from "./utils/local-time.util";
import NoneDiscountPolicy from "./discount/policy/none-discount-policy";
import Money from "./money";
import DiscountPolicy from "./discount/policy/discount-policy";

export default class Movie {
  private title: string;
  private runningTime: number;
  private fee: Money;
  private discountPolicy: DiscountPolicy;

  /**
   * 하나의 영화에는 하나의 할인정책만 적용됨
   */
  constructor(title: string, runningTime: number, fee: Money, discountPolicy: DiscountPolicy) {
    this.title = title;
    this.runningTime = runningTime;
    this.fee = fee;
    this.discountPolicy = discountPolicy;
  }

  getFee(): Money {
    return this.fee;
  }

  calculateMovieFee(screening: Screening): Money {
    if (!this.discountPolicy) {
      return this.fee;
    }

    return this.fee.minus(this.discountPolicy.calculateDiscountAmount(screening));
  }

  changeDiscountPolicy(discountPolicy: DiscountPolicy): void {
    this.discountPolicy = discountPolicy;
  }
}

/**
 * 영화제목 : 아바타
 * 상영시간 : 120분
 * 기본가격 : 10000원
 * 할인정책(800원 추가할인) >
 *  1) 1 또는 10번째 상영자
 *  2) 월요일 10:00 ~ 11:59
 *  3) 목요일 10:00 ~ 20:59
 */
const avatar = new Movie(
  "아바타",
  120,
  Money.wons(10000),
  new AmountDiscountPolicy(
    Money.wons(800),
    new SequenceCondition(1),
    new SequenceCondition(10),
    new PeriodCondition(DayOfWeek.MONDAY, LocalDate.of(10, 0), LocalDate.of(11, 59)),
    new PeriodCondition(DayOfWeek.THURSDAY, LocalDate.of(10, 0), LocalDate.of(20, 59))
  )
);
avatar.changeDiscountPolicy(new PercentDiscountPolicy(0.1, new SequenceCondition(1), new SequenceCondition(10)));

/**
 * 영화제목 : 타이타닉
 * 상영시간 : 180분
 * 기본가격 : 11000원
 * 할인정책(10% 할인) >
 *  1) 2번째 상영자
 *  2) 화요일 14:00 ~ 16:59
 *  3) 금요일 10:00 ~ 13:59
 */
const titanic = new Movie(
  "타이타닉",
  180,
  Money.wons(11000),
  new PercentDiscountPolicy(
    0.1,
    new PeriodCondition(DayOfWeek.TUESDAY, LocalDate.of(14, 0), LocalDate.of(16, 59)),
    new SequenceCondition(2),
    new PeriodCondition(DayOfWeek.FRIDAY, LocalDate.of(10, 0), LocalDate.of(13, 59))
  )
);

/**
 * 영화제목 : 스타워즈
 * 상영시간 : 210분
 * 기본가격 : 10000원
 * 할인정책(없음)
 */
const starWars = new Movie("스타워즈", 210, Money.wons(10000), new NoneDiscountPolicy());

console.log(avatar);
console.log(titanic);
console.log(starWars);
