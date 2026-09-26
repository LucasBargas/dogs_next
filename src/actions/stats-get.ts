"use server";

import { cookies } from "next/headers";
import { STATS_GET } from "../functions/api";
import apiError from "../functions/api-error";

export interface IStatsData {
  id: number;
  title: string;
  acessos: string;
}

const statsGet = async () => {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    throw new Error("Acesso negado");
  }

  try {
    const { url } = STATS_GET();
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error("Erro ao buscar dados.");

    const data = (await res.json()) as IStatsData[];

    return {
      data,
      ok: true,
      error: "",
    };
  } catch (error: unknown) {
    return apiError(error);
  }
};

export default statsGet;
