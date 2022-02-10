import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../interfaces/postInterface";
import {
  loadPosts,
  deletePost,
  editPost,
} from "../../redux/actions/actionCreators";
import { Card } from "../Card/Card";
import "./List.scss";

export function List() {
  const dispatch = useDispatch();
  const posts = useSelector((state: Array<Post>) => state);

  useEffect(() => {
    dispatch(loadPosts());
  }, []);  

  return (
    <>
      <h1 className="title">Posts</h1>
      <div className="list">
        {posts.map((post) => (
          <Card key={post.id} post={post}/>
        ))}
      </div>
    </>
  );
}
