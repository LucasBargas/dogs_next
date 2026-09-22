"use server";

import { PHOTO_GET } from "../functions/api";
import apiError from "../functions/api-error";
import { IPhoto } from "../types/photo";

export interface IComment {
  comment_ID: string;
  comment_post_ID: string;
  comment_author: string;
  comment_content: string;
}

export interface IPhotoData {
  photo: IPhoto;
  comments: IComment[];
}

const photoGet = async (id: string) => {
  try {
    const { url } = PHOTO_GET(id);

    const res = await fetch(url);

    if (!res.ok) throw new Error("Erro ao buscar a foto.");

    const data = (await res.json()) as IPhotoData;

    return {
      data,
      ok: true,
      error: "",
    };
  } catch (error: unknown) {
    return apiError(error);
  }
};

export default photoGet;
