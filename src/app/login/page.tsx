import { LoginForm } from "@/src/components/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dogs | Acesse sua conta",
  description: "Acesse sua conta no site Dogs desenvolvido por Lucas Bargas.",
};

const LoginPage = () => {
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <LoginForm />
    </section>
  );
};

export default LoginPage;
