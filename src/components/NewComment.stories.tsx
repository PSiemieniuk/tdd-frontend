import React from "react";
import { NewComment } from "./NewComment";

export default {
  title: "New Comment",
};

export const DefaultNewComment = () => {
  return <NewComment onSubmit={() => {}} />;
};
