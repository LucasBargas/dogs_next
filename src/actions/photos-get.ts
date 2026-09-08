"use server";

import { IPhoto } from "../types/photo";

const photosGet = async () => {
  const res = await fetch(
    "https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=6&_user=0",
  );

  return (await res.json()) as IPhoto[];
};

export default photosGet;
