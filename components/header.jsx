import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <Link>
          <Image />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
