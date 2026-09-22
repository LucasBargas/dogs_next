"use server";

import { PHOTOS_GET } from "../functions/api";
import apiError from "../functions/api-error";
import { IPhoto } from "../types/photo";

interface PhotosGetParams {
  page?: number;
  total?: number;
  user?: 0 | string;
}

const photosGet = async (
  { page = 1, total = 6, user = 0 }: PhotosGetParams = {},
  optionsFront?: RequestInit,
) => {
  try {
    const options = optionsFront;
    const { url } = PHOTOS_GET({ page, total, user });
    const res = await fetch(url, options);

    if (!res.ok) throw new Error("Erro ao buscar fotos.");

    const data = (await res.json()) as IPhoto[];

    return {
      data,
      ok: true,
      error: "",
    };
  } catch (error: unknown) {
    return apiError(error);
  }
};

export default photosGet;
