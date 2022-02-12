import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Post } from "../../interfaces/postInterface";
import {
  loadPosts,
  deletePost,
  editPost,
} from "../../redux/actions/actionCreators";
import "./Card.scss";

export type CardProps = {
  post: Post;
};

export const Card = ({ post }: CardProps) => {
  const dispatch = useDispatch();
  const [inputBody, setInputBody] = useState(post.body);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  const handleDelete = (id: number) => {
    dispatch(deletePost(id));
  };

  const handleEdit = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    setIsEditing(false);
    dispatch(editPost({ ...post, body: inputBody }));
  };

  const handleChange = () => {
    setIsEditing(false);
    setInputBody(post.body);
  };

  return (
    <div className="cardBox">
      <div className="card">
        <div className="card__front">
          <p className="card__title">{post.title}</p>
        </div>
        <div className="card__back">
          <button
            onClick={() => handleDelete(post.id)}
            className="card__delete"
          >
            X
          </button>
          <p className="card__userid">Author: {post.userId}</p>
          {isEditing === false ? (
            <>
              <button onClick={() => setIsEditing(true)} className="card__edit">
                Edit
              </button>
              <p className="card__body">{post.body}</p>
            </>
          ) : (
            <form onSubmit={(ev) => handleEdit(ev)}>
              <textarea
                aria-label={"Post text edit field"}
                onChange={(ev) => setInputBody(ev.target.value)}
                className="card__body card__body--textarea"
                value={inputBody}
              ></textarea>
              <button
                className="card__cancel"
                type="button"
                onClick={handleChange}
              >
                Cancel
              </button>
              <button className="card__apply">Apply</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
