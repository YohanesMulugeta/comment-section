// console.log("i am working");
export const state = {
  currentUser: {
    image: {
      png: "./images/avatars/image-juliusomo.png",
      webp: "./images/avatars/image-juliusomo.webp",
    },
    username: "juliusomo",
  },
  comments: [
    {
      id: 1,
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: "1 month ago",
      score: 12,
      user: {
        image: {
          png: "./images/avatars/image-amyrobson.png",
          webp: "./images/avatars/image-amyrobson.webp",
        },
        username: "amyrobson",
      },
      replies: [],
    },
    {
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: "2 weeks ago",
      score: 5,
      user: {
        image: {
          png: "./images/avatars/image-maxblagun.png",
          webp: "./images/avatars/image-maxblagun.webp",
        },
        username: "maxblagun",
      },
      replies: [
        {
          id: "2-1",
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: "1 week ago",
          score: 7,
          replyingTo: "maxblagun",
          user: {
            image: {
              png: "./images/avatars/image-ramsesmiron.png",
              webp: "./images/avatars/image-ramsesmiron.webp",
            },
            username: "ramsesmiron",
          },
        },
        {
          id: "2-2",
          content:
            "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          createdAt: "2 days ago",
          score: 2,
          replyingTo: "ramsesmiron",
          user: {
            image: {
              png: "./images/avatars/image-juliusomo.png",
              webp: "./images/avatars/image-juliusomo.webp",
            },
            username: "juliusomo",
          },
        },
      ],
    },
  ],
};

/* ==================================================== score Updater ============================== */

export const scoreUpdate = function (id, add = true) {
  const parentIndex = state.comments.findIndex((el) => el.id === parseInt(id));
  if (+id) {
    // console.log(add);
    if (add) state.comments[parentIndex].score++;
    else state.comments[parentIndex].score--;

    // persisting the updated state
    persistState();

    return state.comments[parentIndex].score;
  }
  // const parentId = state.comments[parentIndex].id;
  const repliesIndex = state.comments[parentIndex].replies.findIndex(
    (el) => el.id === id
  );

  // console.log(repliesIndex, id);
  if (add) state.comments[parentIndex].replies[repliesIndex].score++;
  else state.comments[parentIndex].replies[repliesIndex].score--;

  // persisting the updated state
  persistState();
  return state.comments[parentIndex].replies[repliesIndex].score;
};

// ====================================== LOCAL-STORAGE persist ======================================

const persistState = function () {
  localStorage.setItem("state", JSON.stringify(state));
};

/*======================================================== Index finder =========================================*/

const indexFinder = function (array, id) {
  const index = array.findIndex((el) => el.id === id);
  return index;
};

/*======================================================== Comment-provider ======================================*/
export const dataProvide = function (id) {
  const idP = parseInt(id);
  const indP = indexFinder(state.comments, +idP);

  //                                                              isInRPLIES
  if (!+id) {
    const indR = indexFinder(state.comments[indP].replies, id); // INDEX of repled
    const data = state.comments[indP].replies[indR]; // DATA of replied

    return data;
  }

  return state.comments[indP];
};

/*======================================================== comment-update ===========================================*/
export const contentUpdate = function (id, content) {
  const idP = parseInt(id);
  const indP = indexFinder(state.comments, +idP);

  //                                                              isInRPLIES
  if (!+id) {
    const indR = indexFinder(state.comments[indP].replies, id); // INDEX of repiled

    state.comments[indP].replies[indR].content = content; // UPDATING the content

    //                                                        ASURING CONTROLLED DATA MOVMENT
    return state.comments[indP].replies[indR].content; // UPDATING the content
  }

  state.comments[indP].content = content;
  //                                                        ASURING CONTROLLED DATA MOVMENT
  return state.comments[indP].content;
};

/*========================================================  INITIALIZER function ==================================*/

// localStorage.clear("state");

const init = function () {
  const newState = JSON.parse(localStorage.getItem("state"));

  if (newState) {
    state.comments = newState.comments;
    state.currentUser = newState.currentUser;
  }
};

init();
