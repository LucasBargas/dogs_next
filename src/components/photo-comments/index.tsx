"use client";

import { IComment } from "@/src/actions/photo-get";
import { useUser } from "@/src/hooks/use-user";
import React from "react";
import { PhotoCommentsForm } from "../photo-comment-form";
import styles from "./styles.module.css";

interface PhotoCommentsProps {
  single: boolean;
  id: number;
  comments: IComment[];
}

const PhotoComments = ({ single, id, comments }: PhotoCommentsProps) => {
  const [commentsState, setCommentsState] = React.useState(() => comments);
  const commentsSection = React.useRef<HTMLUListElement>(null);
  const { user } = useUser();

  React.useEffect(() => {
    if (commentsSection.current)
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [commentsState]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${single ? styles.single : ""}`}
      >
        {commentsState.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {user && (
        <PhotoCommentsForm
          single={single}
          id={id}
          setComments={setCommentsState}
        />
      )}
    </>
  );
};

export default PhotoComments;
