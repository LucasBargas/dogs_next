"use server";

import { cookies } from "next/headers";
import { USER_GET } from "../functions/api";
import apiError from "../functions/api-error";
import { IUser } from "../types/user";

const userPost = async () => {
  try {
    const token = (await cookies()).get("token")?.value;

    if (!token) throw new Error("Token não encontrado.");

    const { url } = USER_GET();

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error("Erro ao buscar informações do usuário.");
    const data = (await res.json()) as IUser;

    return {
      data,
      ok: true,
      error: "",
    };
  } catch (error: unknown) {
    return apiError(error);
  }
};

export default userPost;
