import * as model from "./src/model.js";
import post from "./src/commentView.js";
import { field } from "./src/commentField.js";

const state = model.state;

const commentRenderer = function (comment) {
  post.render(comment);
};

// const initialCommentRenderer = function () {
//   model.state.comments.forEach((comment) => {
//     commentRenderer(comment);
//   });
// };

const sendHandler = function (content) {
  const comment = {
    id: 1,
    content: content,
    createdAt: new Date().getDay(),
    score: 0,
    user: model.state.currentUser,
    replies: [],
  };

  model.state.comments.push(comment);
  commentRenderer(comment);
};

const init = function () {
  // initialCommentRenderer();
  field.init(model.state.currentUser, sendHandler);
  post.init(model.state.comments);
};

init();
