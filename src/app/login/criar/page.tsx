import { CreateLoginForm } from "@/src/components/create-login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dogs | Crie sua Conta",
  description: "Crie sua conta no site Dogs desenvolvido por Lucas Bargas.",
};

const LoginCreatePage = () => {
  return (
    <div className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <CreateLoginForm />
    </div>
  );
};

export default LoginCreatePage;
