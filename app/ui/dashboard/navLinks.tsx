"use client";

import clsx from "clsx";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";

const links = [
  {name: "Home", link: "/dashboard"},
  {name: "customers", link: "/dashboard/customers"},
  {
    name: "invoices",
    link: "/dashboard/invoices",
  },
];
export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => (
        <Link key={link.link} href={link.link}>
          <p
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname == link.link,
              },
            )}>{`${link.name}`}</p>
        </Link>
      ))}
    </>
  );
}
