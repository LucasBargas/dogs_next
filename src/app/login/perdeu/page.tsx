import { LostLoginForm } from "@/src/components/lost-login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dogs | Perdeu sua senha",
  description: "Recupere sua senha no site Dogs desenvolvido por Lucas Bargas.",
};

const LoginLostPage = () => {
  return (
    <div className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>
      <LostLoginForm />
    </div>
  );
};

export default LoginLostPage;
