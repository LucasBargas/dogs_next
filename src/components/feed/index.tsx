import { IPhoto } from "@/src/types/photo";
import { FeedPhotos } from "./feed-photos";

interface FeedProps {
  photos: IPhoto[];
}

export const Feed = ({ photos }: FeedProps) => {
  return (
    <div>
      <FeedPhotos photos={photos} />
    </div>
  );
};
