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

const PhotoComments = (props: PhotoCommentsProps) => {
  const [commentsState, setCommentsState] = React.useState(
    () => props.comments,
  );
  const commentsSection = React.useRef<HTMLUListElement>(null);
  const { user } = useUser();

  React.useEffect(() => {
    if (commentsSection.current)
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, []);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${props.single ? styles.single : ""}`}
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
          single={props.single}
          id={props.id}
          setComments={setCommentsState}
        />
      )}
    </>
  );
};

export default PhotoComments;
