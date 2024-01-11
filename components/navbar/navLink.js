"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

const NavLink = ({ name, path }) => {
  const pathName = usePathname();

  return (
    <Link
      href={path}
      className={`${pathName === path && styles.active} px-4 py-2 rounded-2xl`}
    >
      {name}
    </Link>
  );
};
export default NavLink;
