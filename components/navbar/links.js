"use client";

import { useState } from "react";
import NavLink from "./navLink";
import styles from "./navbar.module.css";
import { handleLogout } from "@/lib/actions";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "contact",
    path: "/contact",
  },
  {
    name: "blog",
    path: "/blog",
  },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="hidden lg:flex items-center">
        {links.map(({ name, path }) => (
          <NavLink key={name} name={name} path={path} />
        ))}

        {session?.user ? (
          <>
            {session.user?.isAdmin && <NavLink name="admin" path="/admin" />}
            <form action={handleLogout}>
              <button className="active px-4 py-1">logout</button>
            </form>
          </>
        ) : (
          <NavLink name="login" path="/login" />
        )}
      </div>

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="px-4 py-2 rounded-2xl text-white lg:hidden"
      >
        Menu
      </button>

      {open && (
        <aside className={`${styles.mobLinks} lg:hidden`}>
          {links.map(({ name, path }) => (
            <NavLink key={name} name={name} path={path} />
          ))}
        </aside>
      )}
    </div>
  );
};
export default Links;
