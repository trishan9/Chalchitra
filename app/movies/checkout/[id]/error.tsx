"use client";

import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

const error = () => {
  return (
    <div className="flex flex-col items-start gap-3 p-16 font-semibold text-destructive">
      <Link href="/">
        <ArrowLeftIcon className="w-6 text-white cursor-pointer" />
      </Link>

      <h1>
        Failed to load the movie details for given movie ID. Please try again
        with valid ID
      </h1>
    </div>
  );
};

export default error;
