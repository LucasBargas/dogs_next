/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import photosGet from "@/src/actions/photos-get";
import { Loading } from "@/src/components/loading";
import { IPhoto } from "@/src/types/photo";
import React from "react";
import { FeedPhotos } from "./feed-photos";
import styles from "./styles.module.css";

interface FeedProps {
  photos: IPhoto[];
  user?: 0 | string;
}

export const Feed = ({ photos, user }: FeedProps) => {
  const [photosFeed, setPhotosFeed] = React.useState<IPhoto[]>(photos);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [infinite, setInfinite] = React.useState(
    photos.length < 6 ? false : true,
  );
  const fetching = React.useRef(false);

  const infiniteScroll = () => {
    if (fetching.current) return;

    fetching.current = true;

    setLoading(true);

    setTimeout(() => {
      setPage((prev) => prev + 1);
      fetching.current = false;
      setLoading(false);
    }, 1000);
  };

  React.useEffect(() => {
    if (page === 1) return;
    const getPagePhotos = async () => {
      const actionData = await photosGet(
        { page, total: 6, user: 0 },
        {
          cache: "no-store",
        },
      );
      if (actionData && actionData.data !== null) {
        setPhotosFeed((prev) => [...prev, ...actionData.data]);

        if (actionData.data.length < 6) {
          setInfinite(false);
        }
      }
    };
    getPagePhotos();
  }, [page]);

  React.useEffect(() => {
    if (infinite) {
      window.addEventListener("scroll", infiniteScroll);
      window.addEventListener("wheel", infiniteScroll);
    } else {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    }

    return () => {
      window.removeEventListener("scroll", infiniteScroll);
      window.removeEventListener("wheel", infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      <FeedPhotos photos={photosFeed} />
      <div className={styles.loadingWrapper}>
        {infinite ? loading && <Loading /> : <p>Não existem mais postagens.</p>}
      </div>
    </div>
  );
};
