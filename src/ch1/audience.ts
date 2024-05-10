import Bag from "./bag";
import Ticket from "./ticket";

/**
 * 관람객이라는 개념을 구현한 클래스
 */
export default class Audience {
  private bag: Bag;

  constructor(bag: Bag) {
    this.bag = bag;
  }

  buy(ticket: Ticket): number {
    return this.bag.hold(ticket);
  }
}
