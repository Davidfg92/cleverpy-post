import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Post } from "../../interfaces/postInterface";
import { loadPosts, deletePost } from "../../redux/actions/actionCreators";
import "./List.scss"

export function List() {
  const dispatch = useDispatch()
  const posts = useSelector((state: Array<Post>) => state )

  useEffect(() => {
    dispatch(loadPosts())
  }, []);

  const handleDelete = (id:number) => {
    dispatch(deletePost(id))
  }

  return (
      <>
      <h1 className="title">Posts</h1>
      <div className="list">
      {posts.map((post) => 
        <div className="cardBox">
          <div className="card">
            <div className="card__front">
              <p className="card__title" key={post.id}>{post.title}</p>
            </div>
            <div className="card__back">
              <button onClick={() => handleDelete(post.id)} className="card__delete">X</button>
              <p className="card__userid">{post.userId}</p>
              <p className="card__body">{post.body}</p>
            </div>
          </div>
        </div>
      )}
      </div>
      </>
  )

}