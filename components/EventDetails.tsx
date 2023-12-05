"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useEffect } from "react";
import { useRecoilState } from "recoil";
import clsx from "clsx";
import { Calendar, Ticket } from "lucide-react";
import {
  selectedMovieAtom,
  ticketQtyAtom,
  ticketTypeAtom,
} from "@/atoms/ticket";
import { IMovies } from "@/app/page";
import { Separator } from "@/components/ui/separator";

const EventDetails = ({ movie }: { movie: IMovies }) => {
  const [selectedMovie, setSelectedMovie] = useRecoilState(selectedMovieAtom);
  const [ticketQty, setTicketQty] = useRecoilState(ticketQtyAtom);
  const [ticketType, setTicketType] = useRecoilState(ticketTypeAtom);

  const router = useRouter();

  useEffect(() => {
    setSelectedMovie(movie.title);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/movies/checkout/${movie._id}`);
  };

  console.log(selectedMovie, ticketQty, ticketType);

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="w-[520px] border-dark-border p-6 flex gap-6 flex-col bg-background-secondary border rounded-md"
    >
      <p className="text-2xl font-semibold">Event Details</p>

      <Separator className="bg-dark-border" />

      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center p-3 rounded-full bg-background-tertiary">
          <Calendar className="w-7" />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-text-secondary">
            Date and Time
          </p>
          <p className="font-medium">Wed, Dec 6, 2023 11:30 AM</p>
        </div>
      </div>

      <Separator className="bg-dark-border" />

      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center p-3 rounded-full bg-background-tertiary">
          <Ticket className="w-7" />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-text-secondary">Ticket Type</p>

          <select
            defaultValue={ticketType}
            onChange={(e) => setTicketType(e.target.value)}
            required
            className="-ml-1.5 pr-2 bg-background-secondary outline-none"
          >
            <option value="normal">Chalchitra Normal</option>
            <option value="vip">Chalchitra VIP</option>
          </select>
        </div>
      </div>

      <Separator className="bg-dark-border" />

      <div>
        <p className="text-2xl font-semibold ">Select Tickets</p>

        <div className="flex items-center justify-between p-4 mt-2">
          <div className="flex flex-col gap-2">
            <p className="text-text-secondary">Price per ticket</p>

            <p className="text-2xl font-semibold">
              NRS.{" "}
              {ticketType == "normal"
                ? movie.ticketPriceNormal
                : movie.ticketPriceVip}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              disabled={ticketQty == 1}
              type="button"
              onClick={() => ticketQty > 1 && setTicketQty((prev) => prev - 1)}
              className="flex items-center justify-center w-8 h-8 p-2 text-3xl text-white border rounded-md disabled:cursor-not-allowed border-dark-border bg-background-tertiary"
            >
              -
            </button>

            <input
              type="text"
              disabled
              className={clsx(
                "w-8 text-xl font-semibold bg-background-secondary",
                ticketQty == 10 ? "-mr-3" : "-mr-6"
              )}
              value={ticketQty}
            />

            <button
              disabled={ticketQty == 10}
              type="button"
              onClick={() => ticketQty <= 9 && setTicketQty((prev) => prev + 1)}
              className="flex items-center justify-center w-8 h-8 p-2 text-2xl text-white border rounded-md disabled:cursor-not-allowed border-dark-border bg-brand-primary"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <button
        className="py-3 font-semibold rounded-sm bg-brand-primary"
        type="submit"
      >
        Checkout for NRS.{" "}
        {ticketType == "normal"
          ? ticketQty * Number(movie.ticketPriceNormal)
          : ticketQty * Number(movie.ticketPriceVip)}
      </button>
    </form>
  );
};

export default EventDetails;
