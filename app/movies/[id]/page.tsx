import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import MovieCard from "@/components/MovieCard";
import EventDetails from "@/components/EventDetails";

type Props = {
  params: { id: string };
};

const getMovie = async (id: string) => {
  const response = await fetch(
    `https://ticket-server-31jc.onrender.com/api/movies/${id}`
  );
  const result = await response.json();
  return result;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const movie = await getMovie(id);

  return {
    title: movie.title,
  };
}

const Movie = async ({ params: { id } }: { params: { id: string } }) => {
  const movie = await getMovie(id);

  if (movie.success === false) {
    throw movie;
  }

  return (
    <section className="flex flex-col gap-6 p-12">
      <Link href="/">
        <ArrowLeftIcon className="w-8 text-white cursor-pointer" />
      </Link>

      <div className="flex items-start justify-between text-white">
        <div className="w-1/3">
          <MovieCard movie={movie} isDetailed={true} />
        </div>

        <EventDetails movie={movie} />
      </div>
    </section>
  );
};

export default Movie;
