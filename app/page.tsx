import { Metadata } from "next";
import MovieCard from "@/components/MovieCard";
import Slider from "@/components/Slider";

const API_URL = process.env.API_URL;

const getMovies = async () => {
  const response = await fetch(`${API_URL}`);
  const result = await response.json();
  return result;
};

export interface IMovies {
  _id: string;
  title: string;
  type: string;
  released: string;
  duration: string;
  genre: string;
  director: string;
  cast: string;
  poster: string;
  ticketPriceNormal: string;
  ticketPriceVip: string;
}

export const metadata: Metadata = {
  title: "Chalchitra",
  description: "Chalchitra Home Page. Explore different movies",
};

export default async function Home() {
  const movies = await getMovies();

  return (
    <main className="w-full sm:px-24">
      <Slider />

      <section className="grid items-center justify-center w-full grid-cols-1 px-6 text-white sm:grid-cols-4 gap-14 mt-14 pb-14 sm:px-0">
        {movies.map((movie: IMovies) => (
          <MovieCard movie={movie} key={movie._id} isDetailed={false} />
        ))}
      </section>
    </main>
  );
}
