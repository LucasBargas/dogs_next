"use client";

import userPost from "@/src/actions/user-post";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Button from "../button";
import { ErrorMessage } from "../error-message";
import { Input } from "../input";
import styles from "./styles.module.css";

const FormButton = () => {
  const { pending } = useFormStatus();

  return pending ? (
    <Button disabled={pending}>Cadastrando...</Button>
  ) : (
    <Button disabled={pending}>Cadastrar</Button>
  );
};

export const CreateLoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();
  const [state, action] = useActionState(userPost, {
    ok: false,
    error: "",
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) router.push("/conta");
  }, [state.ok, router]);

  return (
    <form action={action}>
      <Input label="Usuário" type="text" name="username" />
      <Input label="E-mail" type="text" name="email" />
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
  );
};
