import { ResetLoginForm } from "@/src/components/reset-login-form";
import { Metadata } from "next";

interface ResetPageProps {
  searchParams: Promise<{
    key: string;
    login: string;
  }>;
}

export const metadata: Metadata = {
  title: "Dogs | Resetar sua Conta",
  description: "Resetar sua conta no site Dogs desenvolvido por Lucas Bargas.",
};

const LoginResetPage = async ({ searchParams }: ResetPageProps) => {
  const { key, login } = await searchParams;

  return (
    <div className="animeLeft">
      <h1 className="title">Recuperar senha?</h1>
      <ResetLoginForm resetKey={key} login={login} />
    </div>
  );
};

export default LoginResetPage;
