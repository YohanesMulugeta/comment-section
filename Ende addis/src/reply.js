import { View } from "./view.js";
import { field } from "./commentField.js";
import commentView from "./commentView.js";

const currentUser = {
  image: {
    png: "./images/avatars/image-juliusomo.png",
    webp: "./images/avatars/image-juliusomo.webp",
  },
  username: "juliusomo",
};

export const reply = function (handler) {
  const replyHandler = (e) => {
    // GUARD KEY
    if (!e.target.closest(".reply-container")) return;

    const target = e.target;
    let commentCardId;
    let containerId;

    if (!target.closest(".replied-container")) {
      commentCardId = +target.closest(".comment-card").dataset.id;

      const alreadyHaveReplies = handler(false, commentCardId);

      console.log(alreadyHaveReplies);

      document.querySelector(".section-comment-send").remove();

      // RE-RENDERING COMMENT FIELD
      field.render(currentUser, "pussy");
    } else {
      containerId = target.closest(".replied-container").dataset.id;
      //   console.log(target.closest(".replied-container"));

      // REMOVING the already rendered comment-field
      document.querySelector(".section-comment-send").remove();

      field.render(currentUser, containerId);
    }
  };

  window.addEventListener("click", replyHandler);
};
