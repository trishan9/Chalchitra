import { IMovies } from "@/app/page";
import { atom } from "recoil";

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

export const ticketQtyAtom = atom({
  key: "ticketQtyAtom",
  default: 1,
});

export const ticketTypeAtom = atom({
  key: "ticketTypeAtom",
  default: "normal",
});

export const selectedMovieAtom = atom({
  key: "selectedMovieAtom",
  default: "",
});

export const ticketDetailsAtom = atom<ITicketDetails>({
  key: "ticketDetails",
  default: {} as ITicketDetails,
});
