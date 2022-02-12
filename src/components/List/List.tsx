import React, { useEffect, useState } from "react";
import { Post } from "../../interfaces/postInterface";
import { loadPosts } from "../../redux/actions/actionCreators";
import { Card } from "../Card/Card";
import "./List.scss";

export type ListProps = {
  posts: Post[];
};

export const List = ({ posts }: ListProps) => {
  const [search, setSearch] = useState("");
  const [list, setList] = useState<Post[]>(posts);

  useEffect(() => {
    if (search === "") return setList(posts);
    const newList = posts.filter((el) =>
      el.title.toLowerCase().includes(search.trim().toLowerCase())
    );
    return setList(newList);
  }, [search, posts]);

  return (
    <>
      <h1 className="title">prueba tecnica cleverpy</h1>
      <div className="search">
        <input
          className="search__input"
          value={search}
          type="text"
          placeholder="Search by title..."
          onChange={(ev) => setSearch(ev.target.value)}
        />
      </div>
      <div className="list">
        {list.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};
