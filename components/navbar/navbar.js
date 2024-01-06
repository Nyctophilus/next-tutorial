import Link from "next/link";
import Links from "./links";

const Navbar = () => {
  return (
    <nav className="container flex justify-between items-center py-6">
      <Link href="/" className="font-bold">
        Mo
      </Link>

      <Links />
    </nav>
  );
};
export default Navbar;
