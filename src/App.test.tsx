import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { postsStore } from "./redux/store";
import * as actions from "./redux/actions/actionCreators";

describe("React App", () => {
  test("renders learn react link", () => {
    const loadPostsSpy = jest.spyOn(actions, "loadPosts");
    render(
      <Provider store={postsStore()}>
        <App />
      </Provider>
    );
    expect(loadPostsSpy).toHaveBeenCalledTimes(1);
  });
});
