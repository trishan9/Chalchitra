"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useEffect } from "react";
import { useRecoilState } from "recoil";
import clsx from "clsx";
import { format } from "date-fns";
import { Calendar, Ticket } from "lucide-react";
import {
  selectedMovieAtom,
  ticketQtyAtom,
  ticketTypeAtom,
} from "@/atoms/ticket";
import { IMovies } from "@/interfaces/movies";
import { Separator } from "@/components/ui/separator";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const EventDetails = ({ movie }: { movie: IMovies }) => {
  const [, setSelectedMovie] = useRecoilState(selectedMovieAtom);
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

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="sm:w-[520px] w-full border-dark-border p-6 flex gap-6 flex-col bg-background-secondary border rounded-md"
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
          <p className="font-medium">
            {format(new Date(), "MMM dd, yyyy hh:mm aaa")}
          </p>
        </div>
      </div>

      <Separator className="bg-dark-border" />

      <div className="flex items-start gap-3">
        <div className="flex items-center justify-center p-3 rounded-full bg-background-tertiary">
          <Ticket className="w-7" />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-text-secondary">Ticket Type</p>

          <select
            defaultValue={ticketType as string}
            onChange={(e) => {
              setTicketType(e.target.value);
              localStorage.setItem("ticketType", e.target.value as string);
            }}
            required
            className="-ml-1.5 pr-2 bg-background-secondary outline-none font-semibold"
          >
            <option value="normal">Chalchitra Normal</option>

            <option value="vip">Chalchitra VIP</option>
          </select>

          <Dialog>
            <DialogTrigger asChild>
              <p className="font-semibold cursor-pointer text-brand-primary">
                View Movie Hall on Map
              </p>
            </DialogTrigger>
            <DialogContent className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.391943789416!2d85.30127957622595!3d27.674278526947866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19fafe346f21%3A0x25be405bae296c9f!2sLanceme%20Up!5e0!3m2!1sen!2snp!4v1701945827218!5m2!1sen!2snp"
                height="300"
                loading="eager"
                className="w-full my-4"
              ></iframe>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Separator className="bg-dark-border" />

      <div>
        <p className="text-2xl font-semibold ">Select Tickets</p>

        <div className="flex items-center justify-between mt-2 sm:p-4">
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
              onClick={() => {
                if (ticketQty > 1) {
                  setTicketQty((prev) => prev - 1);
                  localStorage.setItem("ticketQty", `${ticketQty - 1}`);
                }
              }}
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
              onClick={() => {
                if (ticketQty <= 9) {
                  setTicketQty((prev) => prev + 1);
                  localStorage.setItem("ticketQty", `${ticketQty + 1}`);
                }
              }}
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
