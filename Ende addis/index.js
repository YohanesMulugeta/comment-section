import * as model from "./src/model.js";
import post from "./src/commentView.js";
import { field } from "./src/commentField.js";
import { scoreInit } from "./src/scoreUpdate.js";

const state = model.state;

const commentRenderer = function (comment) {
  post.render(comment);
};

// const initialCommentRenderer = function () {
//   model.state.comments.forEach((comment) => {
//     commentRenderer(comment);
//   });
// };

///////////////////////////////////////////////////////      comment Send Handler
//////////////////////////////////////////////////////
const sendHandler = function (content) {
  const comment = {
    id: model.state.comments.length + 1,
    content: content,
    createdAt: new Date().getDay(),
    score: 0,
    user: model.state.currentUser,
    replies: [],
  };

  model.state.comments.push(comment);
  commentRenderer(comment);
};

// ///////////////////////////////////////////              SCORE handler
const scoreHandler = function (currentScore, id, add = true) {
  if (add) model.state.comments[id - 1].score++;
  else model.state.comments[id - 1].score--;

  // console.log(model.state.comments[id - 1]);

  return model.state.comments[id - 1].score;
};

const init = function () {
  // initialCommentRenderer();
  field.init(model.state.currentUser, sendHandler);
  post.init(model.state.comments);
  scoreInit(scoreHandler);
};

init();
