import * as model from "./src/model.js";
import post from "./src/commentView.js";
import { field } from "./src/commentField.js";

const commentRenderer = function (comment) {
  post.render(comment);
};
