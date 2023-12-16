"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  return (
    <ul className="flex gap-4 justify-center bg-white border-gray-200">
      <li
        className={`${
          pathName === "/login/admin" && "bg-green"
        }`}
      >
        <Link
          className=" bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white px-4 border border-pink-500 hover:border-transparent rounded"
          href="/login/admin"
        >
          Login as Admin
        </Link>
      </li>
      <li
        className={`${
          pathName === "/login/user" && "bg-green"
        }`}
      >
        <Link
          className=" bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white px-4 border border-pink-500 hover:border-transparent rounded"
          href="/login/user"
        >
          Login as regular user
        </Link>
      </li>
    </ul>
  );
};
export default Header;
