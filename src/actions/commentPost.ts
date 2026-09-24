"use server";

import { cookies } from "next/headers";
import { COMMENT_POST } from "../functions/api";
import apiError from "../functions/api-error";
import { IComment } from "./photo-get";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
const commentPost = async (state: {}, formData: FormData) => {
  const token = (await cookies()).get("token")?.value;
  const comment = formData.get("comment") as string | null;
  const id = formData.get("id") as string | null;

  try {
    if (!token || !comment) throw new Error("Preencha os dados.");

    const { url } = COMMENT_POST(id!);

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    });

    if (!res.ok) throw new Error("Ocorreu um erro.");
    const data = (await res.json()) as IComment;
    return {
      data,
      ok: true,
      error: "",
    };
  } catch (error: unknown) {
    return apiError(error);
  }
};

export default commentPost;
