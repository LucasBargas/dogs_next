"use server";

import { cookies } from "next/headers";
import { TOKEN_VALIDATE_POST } from "../functions/api";
import apiError from "../functions/api-error";

const validateToken = async () => {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    throw new Error("Acesso negado");
  }

  try {
    const { url } = TOKEN_VALIDATE_POST();
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error("Erro ao buscar dados.");

    const data = await res.json();

    return {
      data,
      ok: true,
      error: "",
    };
  } catch (error: unknown) {
    return apiError(error);
  }
};

export default validateToken;
