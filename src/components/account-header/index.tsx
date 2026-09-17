"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import useMedia from "../../hooks/use-media";
import AdicionarIcon from "../../icons/adicionar-icon";
import EstatisticasIcon from "../../icons/estatisticas-icon";
import FeedIcon from "../../icons/feed-icon";
import SairIcon from "../../icons/sair-icon";

import logout from "@/src/actions/logout";
import { useUser } from "@/src/hooks/use-user";
import styles from "./styles.module.css";

const getTitle = (pathname: string) => {
  switch (pathname) {
    case "/conta/postar":
      return "Poste Sua Foto";

    case "/conta/estatisticas":
      return "Estatísticas";

    default:
      return "Minha Conta";
  }
};

export const AccountHeader = () => {
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const pathname = usePathname();
  const { setUserState } = useUser();

  const handleMenuClick = () => {
    setMobileMenu(false);
  };

  const handleLogout = async () => {
    await logout();
    setUserState(null);
  };

  return (
    <header className={styles.header}>
      <h1 className="title">{getTitle(pathname)}</h1>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <Link
          href="/conta"
          className={pathname === "/conta" ? "active" : ""}
          onClick={handleMenuClick}
        >
          <FeedIcon />
          {mobile && "Minhas Fotos"}
        </Link>

        <Link
          href="/conta/estatisticas"
          className={pathname === "/conta/estatisticas" ? "active" : ""}
          onClick={handleMenuClick}
        >
          <EstatisticasIcon />
          {mobile && "Estatísticas"}
        </Link>

        <Link
          href="/conta/postar"
          className={pathname === "/conta/postar" ? "active" : ""}
          onClick={handleMenuClick}
        >
          <AdicionarIcon />
          {mobile && "Adicionar Foto"}
        </Link>

        <button onClick={handleLogout}>
          <SairIcon />
          {mobile && "Sair"}
        </button>
      </nav>
    </header>
  );
};
