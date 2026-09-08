import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { type_second } from "../functions/font";
import { Footer } from "../layouts/footer";
import { Header } from "../layouts/header";
import "./globals.css";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Rede social para cães.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={type_second.variable}>
        <div className="App">
          <Header />
          <main className="AppBody">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
