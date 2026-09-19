"use client";

import login from "@/src/actions/login";
import { ErrorMessage } from "@/src/components/error-message";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Button from "../button";
import { Input } from "../input";
import styles from "./styles.module.css";

const FormButton = () => {
  const { pending } = useFormStatus();

  return pending ? (
    <Button disabled={pending}>Entrando...</Button>
  ) : (
    <Button disabled={pending}>Entrar</Button>
  );
};

export const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();
  const [state, action] = useActionState(login, {
    ok: false,
    error: "",
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) router.push("/conta");
  }, [state.ok, router]);

  return (
    <>
      <form action={action}>
        <Input label="Usuário" type="text" name="username" />
        <div className={styles.relative}>
          <Input
            label="Senha"
            type={showPassword ? "text" : "password"}
            name="password"
          />

          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
          </button>
        </div>
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
      <p>
        Perdeu a senha?{" "}
        <Link className={styles.perdeu} href="/login/perdeu">
          Clique aqui
        </Link>
      </p>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className="button" href="/login/criar">
          Cadastro
        </Link>
      </div>
    </>
  );
};
