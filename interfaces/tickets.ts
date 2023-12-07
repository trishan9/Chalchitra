export interface ITicketDetails {
  movie: {
    address: string;
    city: string;
    country: string;
    email: string;
    fullName: string;
    movie: string;
    state: string;
    zipCode: string;
    unitPrice: string;
    ticketQty: string;
    total: string;
  };
  tickets: [
    {
      ticketQty: string;
      ticketType: string;
      unitPrice: string;
      movie: string;
      poster: string;
      total: string;
    }
  ];
}
