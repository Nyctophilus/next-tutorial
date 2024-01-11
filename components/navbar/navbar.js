import Link from "next/link";
import Links from "./links";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="container flex justify-between items-center py-6">
      <Link href="/" className="font-bold">
        Mo
      </Link>

      <Links session={session} />
    </nav>
  );
};
export default Navbar;
