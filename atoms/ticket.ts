import { atom } from "recoil";

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
