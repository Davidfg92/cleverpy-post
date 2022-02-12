import React from "react";
import { render, screen } from "@testing-library/react";
import { postsFixture } from "../../tests/fixtures/posts";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { postsStore } from "../../redux/store";
import { Card } from "./Card";
import * as actions from "../../redux/actions/actionCreators";

const post = postsFixture[0];

describe("Card component", () => {
  test("renders properly", () => {
    render(
      <Provider store={postsStore()}>
        <Card post={post} />;
      </Provider>
    );
    expect(screen.getByText(post.title)).toBeInTheDocument();
  });

  test("calls deletePost when user click delete button", () => {
    const deletePostSpy = jest.spyOn(actions, "deletePost");
    render(
      <Provider store={postsStore()}>
        <Card post={post} />;
      </Provider>
    );
    userEvent.click(screen.getByText("X"));
    expect(deletePostSpy).toHaveBeenCalledWith(post.id);
  });

  test("calls editPost when user clicked edit button", () => {
    const editPostSpy = jest.spyOn(actions, "editPost");
    render(
      <Provider store={postsStore()}>
        <Card post={post} />;
      </Provider>
    );
    userEvent.click(screen.getByText("Edit"));
    const textArea = screen.getByLabelText("Post text edit field");
    userEvent.clear(textArea);
    userEvent.type(textArea, "Hola");
    userEvent.click(screen.getByText("Apply"));
    expect(editPostSpy).toHaveBeenCalledWith({
      body: "Hola",
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      userId: 1,
    });
  });

  test("dont call editPost when user clicked edit button", () => {
    render(
      <Provider store={postsStore()}>
        <Card post={post} />;
      </Provider>
    );
    userEvent.click(screen.getByText("Edit"));
    const textArea = screen.getByLabelText("Post text edit field");
    userEvent.clear(textArea);
    userEvent.type(textArea, "Hola");
    userEvent.click(screen.getByText("Cancel"));
    expect(screen.getByText(post.body)).toBeInTheDocument();
  });
});
