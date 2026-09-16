import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import userGet from "../actions/user-get";
import { UserContextProvider } from "../contexts/user-context";
import { type_second } from "../functions/font";
import { Footer } from "../layouts/footer";
import { Header } from "../layouts/header";
import "./globals.css";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Rede social para cães.",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const { data } = await userGet();
  return (
    <html lang="pt-br">
      <body className={type_second.variable}>
        <UserContextProvider user={data}>
          <div className="App">
            <Header />
            <main className="AppBody">{children}</main>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
