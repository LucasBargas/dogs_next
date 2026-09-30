"use client";

import { IPhotoData } from "@/src/actions/photo-get";
import { usePathname, useRouter } from "next/navigation";
import { Photo } from "../photo";
import styles from "./styles.module.css";

export const FeedModal = ({ photo }: { photo: IPhotoData }) => {
  const router = useRouter();
  const pathname = usePathname();

  if (!pathname.includes("foto")) {
    return null;
  }

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) router.back();
  };

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <Photo data={photo} single={false} />
    </div>
  );
};
