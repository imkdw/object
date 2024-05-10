import TicketSeller from "./ticket-seller";
import Audience from "./audience";
import Bag from "./bag";
import TicketOffice from "./ticket-office";
import Ticket from "./ticket";
import Invitation from "./invitation";

export default class Theater {
  private ticketSeller: TicketSeller;

  constructor(ticketSeller: TicketSeller) {
    this.ticketSeller = ticketSeller;
  }

  enter(audience: Audience) {
    this.ticketSeller.sellTo(audience);
  }
}

// 돈을 가지고 있는 관람객
const bag1 = new Bag(10000);
const audience1 = new Audience(bag1);

// 티켓을 가지고있는 관람객
const invitation = new Invitation(new Date());
const bag2 = new Bag(invitation, 0);
const audience2 = new Audience(bag2);

const ticketOffice = new TicketOffice(2000, new Ticket(500), new Ticket(500), new Ticket(500));
const ticketSeller = new TicketSeller(ticketOffice);
const theater = new Theater(ticketSeller);

/**
 * 돈을 가진 관객이 입장함
 * 티켓 비용인 500원이 차감되어 amount는 9500원이 됨
 */
theater.enter(audience1);
console.log(audience1);

/**
 * 초대장을 가진 관객이 입장함
 * 티켓 비용이 없으므로 0원이 차감됨
 */
theater.enter(audience2);
console.log(audience2);
