"use client";

//@ts-expect-error
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { format } from "date-fns";
import { usePDF } from "react-to-pdf";
import { useRecoilState } from "recoil";
import { TicketIcon } from "lucide-react";
import { ticketDetailsAtom } from "@/atoms/ticket";
import ScissorsDashLine from "./common/ScissorsDashLine";

const Invoice = () => {
  const [ticketDetails] = useRecoilState(ticketDetailsAtom);
  const { toPDF, targetRef } = usePDF({ filename: "invoice.pdf" });

  return (
    <div className="flex flex-col items-center w-full">
      {ticketDetails ? (
        <div className="pb-6 bg-secondary w-[850px] flex flex-col justify-center items-center">
          <div
            className=" min-h-[29.7cm] w-[850px] overflow-hidden"
            ref={targetRef}
          >
            <div className="z-10 w-full px-6 py-6 text-xl font-semibold text-white bg-brand-primary">
              Chalchitra.com
            </div>

            <div className="flex flex-col items-start p-6">
              <p className="text-lg font-semibold text-black">Invoice</p>

              <div className="flex items-start justify-between w-full mt-4 text-text-primary">
                <div className="flex flex-col gap-2">
                  <p>Invoice to {ticketDetails?.movie?.fullName}</p>

                  <p>
                    {ticketDetails?.movie?.address}
                    {", "}
                    {ticketDetails?.movie?.city}
                  </p>

                  <p>
                    {ticketDetails?.movie?.state}
                    {", "}
                    {ticketDetails?.movie?.country}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <p>ID: {uuidv4().slice(0, 8)}</p>

                  <p>Date: {format(new Date(), "dd MMMM yyyy")}</p>
                </div>
              </div>

              <div className="w-full mt-6 text-base border rounded-md border-border">
                <div className="flex items-center justify-between w-full gap-4">
                  <div className="flex items-center justify-between w-full gap-2 bg-[#F7F8F9] py-2 px-3 text-text-primary font-semibold">
                    <p className="w-[14.2%]">#</p>

                    <p className="w-[14.2%]">Event Detail</p>

                    <p className="w-[14.2%]">Event Type</p>

                    <p className="w-[14.2%]">Ticket</p>

                    <p className="w-[14.2%]">Unit Price</p>

                    <p className="w-[14.2%]">Discount</p>

                    <p className="w-[14.2%]">Total</p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full gap-4 px-3 py-6 text-base text-black bg-white border-t border-b border-border">
                  <p className="w-[14.2%]">1</p>
                  <p className="w-[14.2%] truncate">
                    {ticketDetails?.movie?.movie}
                  </p>

                  <p className="w-[14.2%] truncate">Movie</p>
                  <p className="w-[14.2%] truncate">
                    X{ticketDetails?.movie?.ticketQty}
                  </p>
                  <p className="w-[14.2%] truncate">
                    {ticketDetails?.movie?.unitPrice}
                  </p>
                  <p className="w-[14.2%] truncate">0</p>
                  <p className="w-[14.2%] truncate">
                    {ticketDetails?.movie?.total}
                  </p>
                </div>

                <p className="w-full p-8 text-2xl font-semibold text-right text-black bg-white">
                  Invoice Total: NRS. {ticketDetails?.movie?.total}
                </p>
              </div>

              {ticketDetails &&
                ticketDetails.tickets &&
                ticketDetails.tickets.map((ticket) => (
                  <div
                    key={ticket.total}
                    className="flex flex-col items-center justify-center gap-0 -mt-12"
                  >
                    <ScissorsDashLine />

                    <div className="flex items-center w-full gap-4 p-6 mb-8 -mt-12 bg-white border rounded-sm border-border">
                      <Image
                        width={800}
                        height={800}
                        src={ticket.poster}
                        alt=""
                        className="rounded-md w-28"
                      />

                      <div className="flex flex-col gap-2">
                        <p className="text-lg font-semibold text-black">
                          {ticket.movie}
                        </p>

                        <p className="text-text-primary">
                          {format(new Date(), "dd MMMM yyyy")}
                        </p>

                        <div className="flex items-center gap-2">
                          <TicketIcon className="text-brand-primary" />
                          <p className="font-semibold text-text-primary">x1</p>
                        </div>

                        <p className="text-text-primary">
                          Total:{" "}
                          <span className="font-semibold text-black">
                            {ticket.unitPrice}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <button
            className="w-[800px] p-3 font-semibold text-white rounded-sm bg-brand-primary"
            onClick={() => toPDF()}
          >
            Download
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Invoice;
