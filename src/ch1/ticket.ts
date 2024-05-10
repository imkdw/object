/**
 * 티켓이라는 개념을 구현한 클래스
 */
export default class Ticket {
  private fee: number;

  constructor(fee: number) {
    this.fee = fee;
  }

  getFee(): number {
    return this.fee;
  }
}
