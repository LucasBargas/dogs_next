"use client";

import photoDelete from "@/src/actions/photo-delete";
import React from "react";
import styles from "./styles.module.css";

export const PhotoDelete = ({ id }: { id: string }) => {
  const [loading, setLoading] = React.useState(false);

  const handleClick = async () => {
    setLoading(true);

    const confirm = window.confirm("Tem certeza que deseja deletar?");

    if (confirm) {
      await photoDelete(id);
    }

    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled onClick={handleClick}>
          Deletar
        </button>
      ) : (
        <button className={styles.delete} onClick={handleClick}>
          Deletar
        </button>
      )}
    </>
  );
};
