import React from "react";

import { useRouter } from "next/router";
import Link from "next/link";

const ActiveLink = ({ href, name, as, children, linkClass }) => {
  const router = useRouter();

  const style = {
    color: router.pathname === href ? " #004EF0" : "",
    fontFamily: router.pathname === href ? "Proxima-Medium" : "Proxima-Regular",
  };

  return (
    <>
      <Link href={href} as={as}>
        <a style={style} className={linkClass}>
          {name} {children}
        </a>
      </Link>
    </>
  );
};

export default ActiveLink;
