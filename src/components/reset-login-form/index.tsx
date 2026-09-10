"use client";

import { ErrorMessage } from "@/src/error-message";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";

import passwordReset from "@/src/actions/password-reset";
import Button from "../button";
import { Input } from "../input";
import styles from "./styles.module.css";

interface ResetLoginFormProps {
  resetKey: string;
  login: string;
}

const FormButton = () => {
  const { pending } = useFormStatus();

  return pending ? (
    <Button disabled={pending}>Recuperando...</Button>
  ) : (
    <Button disabled={pending}>Recuperar</Button>
  );
};

export const ResetLoginForm = ({ resetKey, login }: ResetLoginFormProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const [state, action] = useActionState(passwordReset, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <form action={action}>
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

      <input type="text" name="key" value={resetKey} />
      <input type="text" name="login" value={login} />

      <ErrorMessage error={state.error} />

      <FormButton />
    </form>
  );
};
