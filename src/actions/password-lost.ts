"use server";

import { PASSWORD_LOST } from "../functions/api";
import apiError from "../functions/api-error";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
const passwordLost = async (state: {}, formData: FormData) => {
  const login = formData.get("login") as string | null;
  const URLLost = formData.get("url") as string | null;

  try {
    if (!login) throw new Error("Preencha os dados.");

    const { url } = PASSWORD_LOST();

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, url: URLLost }),
    });

    if (!res.ok) throw new Error("E-mail ou usuário não cadastrado.");

    return {
      data: null,
      ok: true,
      error: "",
    };
  } catch (error: unknown) {
    return apiError(error);
  }
};

export default passwordLost;
