import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import MovieCard from "@/components/MovieCard";
import EventDetails from "@/components/EventDetails";
import { Metadata } from "next";

const API_URL = process.env.API_URL;

export const metadata: Metadata = {
  title: "Event Details",
};

const getMovie = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`);
  const result = await response.json();
  return result;
};

const Movie = async ({ params: { id } }: { params: { id: string } }) => {
  const movie = await getMovie(id);

  if (movie.success === false) {
    throw movie;
  }

  return (
    <section className="flex flex-col gap-6 p-6 sm:p-12">
      <Link href="/">
        <ArrowLeftIcon className="w-8 text-white cursor-pointer" />
      </Link>

      <div className="flex flex-col items-start justify-between gap-8 text-white sm:gap-0 sm:flex-row">
        <div className="sm:w-1/3">
          <MovieCard movie={movie} isDetailed={true} />
        </div>

        <EventDetails movie={movie} />
      </div>
    </section>
  );
};

export default Movie;
