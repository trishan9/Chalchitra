"use client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ticketQtyAtom, ticketTypeAtom } from "@/atoms/ticket";
import { IMovies } from "@/app/page";
import { Form } from "@/components/ui/form";
import formSchema from "./formSchema";
import CheckoutSummary from "./Summary";
import CheckoutForm from "./Form";

const Checkout = ({ movie }: { movie: IMovies }) => {
  const [ticketType] = useRecoilState(ticketTypeAtom);
  const [ticketQty] = useRecoilState(ticketQtyAtom);
  const [pricePerTicket] = useState(
    ticketType == "normal" ? movie.ticketPriceNormal : movie.ticketPriceVip
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      address: "",
      country: "",
      state: "",
      city: "",
      zipCode: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const tickets = [];
    const ticketDetails = {
      ticketQty,
      ticketType,
      unitPrice: pricePerTicket,
      movie: movie.title,
      poster: movie.poster,
      total:
        Number(pricePerTicket) * ticketQty +
        (Number(pricePerTicket) * ticketQty * 13) / 100,
    };
    if (ticketQty > 1) {
      for (let i = 0; i < ticketQty; i++) {
        tickets.push({ ...ticketDetails, ticketQty: 1 });
      }
    }
    const data = {
      movie: { ...values, movie: movie.title },
      tickets: ticketQty == 1 ? [ticketDetails] : tickets,
    };
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-start justify-between gap-8"
      >
        <CheckoutForm form={form} />

        <CheckoutSummary movie={movie} />
      </form>
    </Form>
  );
};

export default Checkout;
