"use server";

import { redirect } from "next/navigation";
import { PASSWORD_RESET } from "../functions/api";
import apiError from "../functions/api-error";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
const passwordReset = async (state: {}, formData: FormData) => {
  const login = formData.get("login") as string | null;
  const resetKey = formData.get("key") as string | null;
  const password = formData.get("password") as string | null;

  try {
    if (!login || !resetKey || !password) throw new Error("Preencha os dados.");

    const { url } = PASSWORD_RESET();

    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("Não autorizado, tente novamente.");
  } catch (error: unknown) {
    return apiError(error);
  }

  redirect("/login");
};

export default passwordReset;
