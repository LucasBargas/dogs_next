import { IPhoto } from "@/src/types/photo";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

interface FeedPhotosProps {
  photos: IPhoto[];
}

export const FeedPhotos = ({ photos }: FeedPhotosProps) => {
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {photos.map((el, i) => (
        <li key={el.id + i} className={styles.photo}>
          <Link href={`/foto/${el.id}`} scroll={false}>
            <Image
              src={el.src}
              width={1500}
              height={1500}
              alt={el.title}
              loading="eager"
              sizes="80vw"
            />
            <span className={styles.visualizacao}>{el.acessos}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
