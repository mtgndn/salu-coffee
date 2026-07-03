"use client";

import { useEffect, useState } from "react";

type HeaderProps = {
  yemeksepetiUrl: string;
};

export function Header({ yemeksepetiUrl }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={isScrolled ? "siteHeader isScrolled" : "siteHeader"}>
      <a className="brand" href="#top" aria-label="Salu Coffee ana sayfa">
        <span className="brandMark">S</span>
        <span>Salu Coffee</span>
      </a>
      <nav aria-label="Ana menü">
        <a href="#menu">Menü</a>
        <a href="#story">Hikaye</a>
        <a href="#order">Sipariş</a>
      </nav>
      <a className="headerAction" href={yemeksepetiUrl} target="_blank" rel="noreferrer">
        Yemeksepeti
      </a>
    </header>
  );
}
