import { View } from "./view.js";
import { field } from "./commentField.js";
import commentView from "./commentView.js";

// const currentUser = {
//   image: {
//     png: "./images/avatars/image-juliusomo.png",
//     webp: "./images/avatars/image-juliusomo.webp",
//   },
//   username: "juliusomo",
// };

export const reply = function (handler) {
  const replyHandler = (e) => {
    // console.log("cl");
    // GUARD KEY
    if (!e.target.closest(".reply-container")) return;

    const target = e.target;
    const commentCardId = target.closest(".comment-card").dataset.id;

    // this checks whether the Reply btn is clicked from the comment card inside a comment replied container or not
    if (!target.closest(".replied-container")) {
      handler(false, commentCardId);
    } else {
      handler(true, commentCardId);
    }
  };

  window.addEventListener("click", replyHandler);
};
