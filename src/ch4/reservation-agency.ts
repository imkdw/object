import Customer from "./customer";
import Reservation from "./reservation";
import Screening from "./screening";
import Money from "./money";
import MovieType from "./enums/movie-type.enum";

export default class ReservationAgency {
  reserve(screening: Screening, customer: Customer, audienceCount: number): Reservation {
    const fee = screening.calculateFee(audienceCount);
    return new Reservation(customer, screening, fee, audienceCount);
  }
}
