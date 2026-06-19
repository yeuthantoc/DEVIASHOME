"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { locales } from "@/i18n/config";
import { BrandLogo } from "./icons";
import { trackLead } from "@/lib/track";

function LangSwitcher({
  pathname,
  active,
  onNavigate
}: {
  pathname: string;
  active: string;
  onNavigate?: () => void;
}) {
  return (
    <>
      {locales.flatMap((loc, i) => {
        const link = (
          <Link
            key={loc}
            href={pathname}
            locale={loc}
            className={loc === active ? "active" : ""}
            onClick={onNavigate}
          >
            {loc.toUpperCase()}
          </Link>
        );
        return i === 0 ? [link] : [<span key={`${loc}-sep`}>/</span>, link];
      })}
    </>
  );
}

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header id="header" className={scrolled ? "scrolled" : ""}>
      <div className="wrap nav">
        <a href="#top" className="brand" aria-label="DEVIAS HOME home">
          <BrandLogo className="leaf" />
          <span>
            DEVIAS HOME<small>KITCHEN DECO</small>
          </span>
        </a>

        <ul className={`menu${menuOpen ? " open" : ""}`} id="menu">
          <li>
            <a href="#products" onClick={closeMenu}>
              {t("products")}
            </a>
          </li>
          <li>
            <a href="#caps" onClick={closeMenu}>
              {t("caps")}
            </a>
          </li>
          <li>
            <a href="#process" onClick={closeMenu}>
              {t("sustain")}
            </a>
          </li>
          <li>
            <a href="#insights" onClick={closeMenu}>
              {t("about")}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              {t("contact")}
            </a>
          </li>
          <li className="lang lang-mobile">
            <LangSwitcher pathname={pathname} active={locale} onNavigate={closeMenu} />
          </li>
        </ul>

        <div className="nav-right">
          <div className="lang" id="lang">
            <LangSwitcher pathname={pathname} active={locale} />
          </div>
          <a
            href="#contact"
            className="btn btn-primary"
            data-cta="header"
            onClick={() => trackLead("header")}
          >
            {t("cta")}
          </a>
          <button
            className="burger"
            id="burger"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
