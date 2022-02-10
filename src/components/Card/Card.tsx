import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../interfaces/postInterface";
import {
  loadPosts,
  deletePost,
  editPost,
} from "../../redux/actions/actionCreators";
import "./Card.scss";

// @ts-ignore
export function Card({ post }) {
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
    setInputBody(post.body)
  }

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
          <p className="card__userid">{post.userId}</p>
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
                onChange={(ev) => setInputBody(ev.target.value)}
                className="card__body card__body--textarea"
                value={inputBody}
              ></textarea>
              <button
                type="button"
                onClick={handleChange}
              >
                Cancelar
              </button>
              <button>Aceptar</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
