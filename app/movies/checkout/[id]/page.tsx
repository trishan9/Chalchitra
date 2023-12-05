import { Metadata } from "next";
import CheckoutForm from "@/components/Checkout";
import { Separator } from "@/components/ui/separator";

const getMovie = async (id: string) => {
  const response = await fetch(
    `https://ticket-server-31jc.onrender.com/api/movies/${id}`
  );
  const result = await response.json();
  return result;
};

export const metadata: Metadata = {
  title: "Checkout",
};

const Checkout = async ({ params: { id } }: { params: { id: string } }) => {
  const movie = await getMovie(id);

  if (movie.success === false) {
    throw movie;
  }

  return (
    <section className="flex flex-col gap-12 p-20 text-white">
      <div className="flex flex-col gap-6">
        <p className="text-2xl font-semibold">Order Confirmation</p>

        <Separator className="bg-dark-border" />
      </div>

      <CheckoutForm movie={movie} />
    </section>
  );
};

export default Checkout;
