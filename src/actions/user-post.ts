"use server";

import { USER_POST } from "../functions/api";
import apiError from "../functions/api-error";
import login from "./login";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
const userPost = async (state: {}, formData: FormData) => {
  const username = formData.get("username") as string | null;
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;

  try {
    if (!username || !email || !password) throw new Error("Preencha os dados.");

    const { url } = USER_POST();

    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("E-mail ou usuário já cadastrados.");

    const { ok } = await login({ ok: true, error: "" }, formData);
    if (!ok) throw new Error("Erro ao logar o usuário.");

    return {
      data: null,
      ok: true,
      error: "",
    };
  } catch (error: unknown) {
    return apiError(error);
  }
};

export default userPost;
