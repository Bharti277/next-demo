import React from "react";
import Link from "next/link";
import Styles from "../styles/Home.module.css";

function HomePage() {
  return (
    <div className={Styles.container}>
      <nav>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/blogpost/blog">
            <li>Blog</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
