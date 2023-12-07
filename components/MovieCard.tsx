import Link from "next/link";
import Image from "next/image";
import { IMovies } from "@/interfaces/movies";

const MovieCard = ({
  movie,
  isDetailed,
}: {
  movie: IMovies;
  isDetailed: boolean;
}) => {
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="relative w-full">
        <Link href={`/movies/${movie._id}`}>
          <Image
            placeholder="blur"
            blurDataURL={movie.poster}
            width={800}
            height={800}
            src={movie.poster}
            alt={movie.title}
            className="object-cover w-full border rounded-lg cursor-pointer border-dark-border aspect-square"
          />
        </Link>

        <p className="absolute top-0 right-0 px-4 py-2 m-4 font-semibold capitalize rounded-md transparent">
          {movie.type}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-lg font-semibold">{movie.title}</p>

        {!isDetailed ? (
          <div className="flex items-center gap-3 text-sm">
            <p>{movie.released}</p>

            <div className="w-2 h-2 rounded-full bg-text-secondary"></div>

            <p>Kathmandu, Nepal</p>
          </div>
        ) : (
          <div className="flex flex-col gap-1 text-sm">
            <p>
              <span className="font-semibold">Director: </span> {movie.director}
            </p>

            <p>
              <span className="font-semibold">Actors: </span> {movie.cast}
            </p>

            <p>
              <span className="font-semibold">Duration: </span>
              {movie.duration}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
