import React from "react";
import { render, screen } from "@testing-library/react";
import { postsFixture } from "../../tests/fixtures/posts";
import userEvent from "@testing-library/user-event";
import { List } from "./List";
import { Provider } from "react-redux";
import { postsStore } from "../../redux/store";

describe("List component", () => {
  test("renders properly", () => {
    render(
      <Provider store={postsStore()}>
        <List posts={[]} />;
      </Provider>
    );
    expect(screen.getByText("Posts")).toBeInTheDocument();
  });

  test("renders posts array given by props", () => {
    render(
      <Provider store={postsStore()}>
        <List posts={postsFixture} />;
      </Provider>
    );
    expect(screen.getByText(postsFixture[0].title)).toBeInTheDocument();
  });

  test("filters the posts array when a search value is provided", () => {
    render(
      <Provider store={postsStore()}>
        <List posts={postsFixture} />;
      </Provider>
    );
    userEvent.type(
      screen.getByPlaceholderText("Search by title..."),
      "qui est esse"
    );
    expect(screen.queryByText(postsFixture[0].title)).not.toBeInTheDocument();
    expect(screen.getByText(postsFixture[1].title)).toBeInTheDocument();
  });
});
