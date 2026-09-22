"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PHOTO_DELETE } from "../functions/api";
import apiError from "../functions/api-error";

const photoDelete = async (id: string) => {
  const token = (await cookies()).get("token")?.value;

  try {
    if (!token) throw new Error("Token inválido.");

    const { url } = PHOTO_DELETE(id);

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) throw new Error("Erro ao deletar foto.");

    console.log("deletou");
  } catch (error: unknown) {
    return apiError(error);
  }

  redirect("/conta");
};

export default photoDelete;
