"use client";

import passwordLost from "@/src/actions/password-lost";
import { usePathname } from "next/navigation";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import Button from "../button";
import { ErrorMessage } from "../error-message";
import { Input } from "../input";

const FormButton = () => {
  const { pending } = useFormStatus();

  return pending ? (
    <Button disabled={pending}>Enviando...</Button>
  ) : (
    <Button disabled={pending}>Enviar</Button>
  );
};

export const LostLoginForm = () => {
  const pathname = `${process.env.NEXT_PUBLIC_SITE_URL}${usePathname()}`;

  const [state, action] = useActionState(passwordLost, {
    ok: false,
    error: "",
    data: null,
  });

  const url = pathname.replace("perdeu", "resetar");

  return (
    <form action={action}>
      <Input label="E-mail / Usuário" type="text" name="login" />
      <input type="hidden" name="url" value={url} />
      <ErrorMessage error={state.error} />

      {state.ok ? (
        <p style={{ color: "green" }}>
          E-mail enviado com sucesso! Verifique sua caixa de entrada.
        </p>
      ) : (
        <FormButton />
      )}
    </form>
  );
};
