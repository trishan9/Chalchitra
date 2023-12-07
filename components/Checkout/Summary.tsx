import Link from "next/link";
import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  selectedMovieAtom,
  ticketQtyAtom,
  ticketTypeAtom,
} from "@/atoms/ticket";
import { IMovies } from "@/app/page";
import { Separator } from "../ui/separator";

const CheckoutSummary = ({ movie }: { movie: IMovies }) => {
  const [ticketType] = useRecoilState(ticketTypeAtom);
  const [ticketQty] = useRecoilState(ticketQtyAtom);
  const [selectedMovie] = useRecoilState(selectedMovieAtom);
  const [pricePerTicket] = useState(
    ticketType == "normal" ? movie.ticketPriceNormal : movie.ticketPriceVip
  );

  return (
    <div className="sm:w-[35%] w-full p-7 border rounded-md flex flex-col gap-4 bg-background-secondary border-dark-border">
      <p className="text-2xl font-semibold">Checkout Summary</p>

      <Separator className="bg-dark-border" />

      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">{selectedMovie}</p>

        <div className="flex items-center gap-3 text-sm text-text-secondary">
          <p>Movie</p>

          <div className="w-2 h-2 rounded-full bg-text-secondary"></div>

          <p>Kathmandu, Nepal</p>
        </div>
      </div>

      <Separator className="bg-dark-border" />

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="uppercase text-text-secondary">{ticketType}</p>

          <p>X{ticketQty}</p>

          <p className="font-semibold">NRS. {pricePerTicket}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-text-secondary">Sub Total</p>
          <p className="font-semibold">
            NRS. {Number(pricePerTicket) * ticketQty}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-text-secondary">Tax (13%)</p>
          <p className="font-semibold">
            NRS. {(Number(pricePerTicket) * ticketQty * 13) / 100}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-text-secondary">Discount (0%)</p>
          <p className="font-semibold">NRS. 0</p>
        </div>
      </div>

      <Separator className="mt-2 bg-dark-border" />

      <div className="flex items-center justify-between my-2">
        <p className="text-lg text-text-secondary">Total</p>

        <div className="flex items-center gap-2">
          <p className="text-text-secondary">NRS</p>

          <p className="text-2xl font-semibold">
            {Number(pricePerTicket) * ticketQty +
              (Number(pricePerTicket) * ticketQty * 13) / 100}
          </p>
        </div>
      </div>

      <Separator className="bg-dark-border" />

      <div className="flex items-center justify-between w-full gap-6 mt-2">
        <Link className="w-full text-center" href={`/movies/${movie._id}`}>
          Cancel
        </Link>

        <button
          type="submit"
          className="w-full py-3 font-semibold rounded-md bg-brand-primary"
        >
          Confirm & pay
        </button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
