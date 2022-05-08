import * as model from "./src/model.js";
import post from "./src/commentView.js";
import { field } from "./src/commentField.js";
import { scoreInit } from "./src/scoreUpdate.js";
import { reply } from "./src/reply.js";

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

// ============================================================= SCORE HANDLER ======================================
const scoreHandler = function (currentScore, id, add) {
  if (+id) {
    // console.log(add);
    if (add) model.state.comments[id - 1].score++;
    else model.state.comments[id - 1].score--;
    return model.state.comments[id - 1].score;
  }
  const parentId = parseInt(id);
  const extension = +id.slice(-1);

  if (add) model.state.comments[parentId - 1].replies[extension - 1].score++;
  else model.state.comments[parentId - 1].replies[extension - 1].score--;

  return model.state.comments[parentId - 1].replies[extension - 1].score;
  // console.log(model.state.comments[id - 1]);
};

/*=================================================== REPLY CHECKER ======================================== */
const replyChecker = function (isRepliedContaier, commentId) {
  if (!isRepliedContaier) {
    // checking whether the comment already have a container when clicked
    const alreadyHaveReplies =
      model.state.comments[commentId - 1].replies.length > 0;

    return alreadyHaveReplies;
  }
  // return false;
};
const init = function () {
  // initialCommentRenderer();
  field.render(model.state.currentUser, null, sendHandler);
  post.init(model.state.comments);
  scoreInit(scoreHandler);
  reply(replyChecker);
};

init();
