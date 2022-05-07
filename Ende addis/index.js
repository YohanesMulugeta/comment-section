import * as model from "./src/model.js";
import post from "./src/commentView.js";
import { field } from "./src/commentField.js";

const commentRenderer = function (comment) {
  post.render(comment);
};

// const initialCommentRenderer = function () {
//   model.state.comments.forEach((comment) => {
//     commentRenderer(comment);
//   });
// };

const init = function () {
  // initialCommentRenderer();
  field.init(model.state.currentUser);
  post.init(model.state.comments);
};

init();
