"use client";

import { atom } from "recoil";
import { ITicketDetails } from "@/interfaces/tickets";

const localStorageExists =
  typeof window !== "undefined" ? window.localStorage : null;

export const ticketQtyAtom = atom({
  key: "ticketQtyAtom",
  default:
    localStorageExists && localStorage.getItem("ticketQty")
      ? Number(localStorage.getItem("ticketQty"))
      : 1,
});

export const ticketTypeAtom = atom({
  key: "ticketTypeAtom",
  default:
    localStorageExists && localStorage.getItem("ticketType")
      ? localStorage.getItem("ticketType")
      : "normal",
});

export const selectedMovieAtom = atom({
  key: "selectedMovieAtom",
  default: "",
});

export const ticketDetailsAtom = atom<ITicketDetails>({
  key: "ticketDetails",
  default: {} as ITicketDetails,
});
