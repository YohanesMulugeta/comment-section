import * as model from "./src/model.js";
import post from "./src/commentView.js";
import { field } from "./src/commentField.js";
import { scoreInit } from "./src/scoreUpdate.js";
import { reply } from "./src/reply.js";
import { edit } from "./src/edit.js";

const state = model.state;

const commentRenderer = function ({ comment, RCid, replied = false, current }) {
  // if (RCid) post.render(comment, RCid);
  // else post.render(comment);
  const byCurrent = current ? current : replied;
  post.render(comment, RCid, replied, byCurrent);
};

// const initialCommentRenderer = function () {
//   model.state.comments.forEach((comment) => {
//     commentRenderer(comment);
//   });
// };

/*======================================================== SEND-HANDLER =============================================*/

const sendHandler = function (content, idReplyingTo, inReplied) {
  const comment = {
    content: content,
    createdAt: new Date().getDay(),
    score: 0,
    user: model.state.currentUser,
    replies: [],
  };

  if (idReplyingTo) {
    const parentCommentId = parseInt(idReplyingTo);

    // finding the index of the parent comment inside the state.comments array
    const parentIndex = model.indexFinder(
      model.state.comments,
      parentCommentId
    );

    const commentReplyTo = model.dataProvide(parentCommentId);
    // model.state.comments[parentIndex];

    // let extensionId;

    if (!+idReplyingTo) {
      // console.log(parentIndex, idReplyingTo);
      // extensionId = +idReplyingTo.split("-")[1];

      // const index = model.indexFinder(commentReplyTo.replies, idReplyingTo);
      // .findIndex(
      //   (el) => +el.id.split("-")[1] === extensionId
      // );

      const replyingTo = model.dataProvide(idReplyingTo).user.username;

      // console.log(replyingTo);
      comment.replyingTo = replyingTo;
    }

    if (+idReplyingTo) {
      // GETTIN USER NAME
      const replyingTo = commentReplyTo.user.username;

      // setting USERNAME
      comment.replyingTo = replyingTo;
    }

    // creating new EXTENSION ID
    const newExtensionId = new Date().getTime();

    // the id of the  new replied comment
    comment.id = parentCommentId + "-" + newExtensionId;

    // model.state.comments[parentIndex].replies.push(comment);

    model.dataPush(comment, comment.id);
    // console.log(model.state.comments[parentCommentId - 1]);

    // console.log(idReplyingTo);
    const argumentsObj = {
      RCid: parentCommentId + "RC",
      replied: true,
      comment: comment,
    };
    commentRenderer(argumentsObj);
    // console.log(parentCommentId + "rc");
  } else {
    comment.id = new Date().getTime();
    // console.log(comment.id)
    // model.state.comments.push(comment);

    model.dataPush(comment, comment.id);
    commentRenderer({ comment: comment, current: true });
  }

  field.render(model.state.currentUser, null, sendHandler);
};

// ============================================================= SCORE HANDLER ======================================
const scoreHandler = function (id, add) {
  const score = model.scoreUpdate(id, add);

  return score;
};

/*=================================================== REPLY Handler ======================================== */
const replyChecker = function (isRepliedContainer, commentId) {
  const rcIdcId = parseInt(commentId) + "RCto" + commentId;

  if (!isRepliedContainer) {
    // checking whether the comment already have a container when clicked

    const index = model.state.comments.findIndex((el) => el.id === +commentId);
    const alreadyHaveReplies = model.state.comments[index].replies.length > 0;

    console.log(alreadyHaveReplies);
    // commentId because the field will create the replies  container and render it with the id of commentID + RC
    field.render(
      model.state.currentUser,
      rcIdcId,
      sendHandler,
      alreadyHaveReplies
    );

    return alreadyHaveReplies;
  } else {
    // console.log(parseInt(rcId));
    field.render(model.state.currentUser, rcIdcId, sendHandler);
  }
  // return false;
};

/*================================================= Edit handler ==========================================*/
const editHandler = function (id, content) {
  // console.log("clicked");
  // const idP = parseInt(id);

  const toBeEditedComment = model.dataProvide(id);
  if (!content) {
    if (!+id)
      return {
        content: toBeEditedComment.content,
        replyingTo: toBeEditedComment.replyingTo,
      };

    return { content: toBeEditedComment.content };
  }

  field.render(model.state.currentUser, null, sendHandler);

  return model.contentUpdate(id, content);
};

const init = function () {
  // initialCommentRenderer();
  post.init(model.state.comments);
  field.render(model.state.currentUser, null, sendHandler);
  scoreInit(scoreHandler);
  reply(replyChecker);
  edit.init(editHandler);
};

init();
