"use client";

import photoPost from "@/src/actions/photo-post";
import { ErrorMessage } from "@/src/components/error-message";
import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Button from "../button";
import { Input } from "../input";
import styles from "./styles.module.css";

const FormButton = () => {
  const { pending } = useFormStatus();

  return pending ? (
    <Button disabled={pending}>Postando...</Button>
  ) : (
    <Button disabled={pending}>Postar</Button>
  );
};

export const AccountPhotoPost = () => {
  const [img, setImg] = React.useState<string>("");
  const [state, action] = useActionState(photoPost, {
    ok: false,
    error: "",
    data: null,
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImg(URL.createObjectURL(file));
  };

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form action={action} className={styles.form}>
        <Input label="Nome" type="text" name="nome" />
        <Input label="Peso" type="number" name="peso" />
        <Input label="Idade" type="number" name="idade" />
        <input
          type="file"
          name="img"
          id="img"
          className={styles.file}
          onChange={handleImageChange}
        />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
      <div>
        {img && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        )}
      </div>
    </section>
  );
};
