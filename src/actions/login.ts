"use server";

import { cookies } from "next/headers";
import { TOKEN_POST } from "../functions/api";
import apiError from "../functions/api-error";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
const login = async (state: {}, formData: FormData) => {
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;

  try {
    if (!username || !password) throw new Error("Preencha os dados.");

    const { url } = TOKEN_POST();

    const res = await fetch(url, {
      method: "POST",
      body: formData, // content-type não é necessário porque o body é um formData.
    });

    if (!res.ok) throw new Error("Senha ou usuários inválidos.");

    const data = await res.json();

    (await cookies()).set("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });

    return {
      data: null,
      ok: true,
      error: "",
    };
  } catch (error: unknown) {
    return apiError(error);
  }
};

export default login;
