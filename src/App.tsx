import React, { useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { List } from "./components/List/List";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "./interfaces/postInterface";
import { loadPosts } from "./redux/actions/actionCreators";

function App() {
  const posts = useSelector((state: Post[]) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  return (
    <div className="App">
      {posts.length > 0 && <List posts={posts} />}
      <Footer />
    </div>
  );
}

export default App;
