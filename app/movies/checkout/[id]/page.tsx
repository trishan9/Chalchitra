import { Metadata } from "next";
import CheckoutForm from "@/components/Checkout";

const API_URL = process.env.API_URL;

const getMovie = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`);
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
      <CheckoutForm movie={movie} />
    </section>
  );
};

export default Checkout;
