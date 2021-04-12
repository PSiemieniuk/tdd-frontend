import * as React from "react";
import { useState } from "react";

type Props = {
  onSubmit: (name: string, email: string, comment: string) => void;
};
export const NewComment = ({ onSubmit }: Props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const sendComment = () => {
    onSubmit(name, email, comment);
  };

  return (
    <div>
      <input
        placeholder="Your name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        placeholder="Your email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        placeholder="Your text"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button type="button" onClick={sendComment}>
        Submit
      </button>
    </div>
  );
};
