"use client";

import commentPost from "@/src/actions/commentPost";
import { IComment } from "@/src/actions/photo-get";
import EnviarIcon from "@/src/icons/enviar-icon";
import React, { Dispatch, SetStateAction, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { ErrorMessage } from "../error-message";
import styles from "./styles.module.css";

interface PhotoCommentsFormProps {
  single: boolean;
  id: number;
  setComments: Dispatch<SetStateAction<IComment[]>>;
}

const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <button className={styles.button} disabled={pending} type="submit">
      <EnviarIcon />
    </button>
  );
};

export const PhotoCommentsForm = ({
  single,
  id,
  setComments,
}: PhotoCommentsFormProps) => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [state, action] = useActionState(commentPost, {
    ok: false,
    error: "",
    data: null,
  });

  React.useEffect(() => {
    if (state.ok && state.data) {
      setComments((prev) => [...prev, state.data]);
      formRef.current?.reset();
    }
  }, [state, setComments]);

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ""}`}
      action={action}
      ref={formRef}
    >
      <textarea
        className={styles.textarea}
        name="comment"
        id="comment"
        placeholder="Comente..."
      ></textarea>
      <input type="hidden" name="id" value={id} />
      <FormButton />
      <ErrorMessage error={state.error} />
    </form>
  );
};
