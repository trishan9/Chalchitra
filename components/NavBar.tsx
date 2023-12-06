import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between w-full px-24 py-6 text-white bg-background-secondary">
      <div className="flex items-center gap-20">
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <h1 className="text-2xl font-semibold text-brand-primary">
            Chalchitra<span className="text-white">.com</span>
          </h1>
        </Link>

        <ul className="flex gap-8 font-medium">
          <li className="cursor-pointer">Home</li>

          <li className="cursor-pointer">Concerts</li>

          <li className="cursor-pointer">Movies</li>

          <li className="cursor-pointer">Theater Events</li>
        </ul>
      </div>

      <div className="flex gap-4 font-semibold">
        <button className="px-3 py-2">Login</button>

        <button className="px-3 py-2 rounded-md bg-brand-primary">
          Register
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
