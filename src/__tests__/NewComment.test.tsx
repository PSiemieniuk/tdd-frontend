import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { NewComment } from "../components/NewComment";

describe("<NewComment />", () => {
  it("should add new comment", () => {
    const name = "Name 1";
    const email = "email@email.com";
    const comment = "New comment 1";

    const onSubmit = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <NewComment onSubmit={onSubmit} />
    );

    const nameInput = getByPlaceholderText("Your name");
    const emailInput = getByPlaceholderText("Your email");
    const commentInput = getByPlaceholderText("Your text");
    const submitButton = getByText("Submit");

    fireEvent.change(nameInput, { target: { value: name } });
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(commentInput, { target: { value: comment } });
    fireEvent.click(submitButton);

    expect(onSubmit).toBeCalledTimes(1);
    expect(onSubmit).toBeCalledWith(name, email, comment);
  });
});
