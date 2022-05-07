const scoreUpdate = function (handler) {
  window.addEventListener("click", (e) => {
    const target = e.target;
    //   console.log(e.target);
    if (!target.closest(".btn-score")) return;

    const currentScore = +target.closest(".score-container").textContent.trim();

    //   if (target.closest(".plus")) console.log(currentScore + 1);
    const id = target.closest(".comment-card").id;

    const newScore = handler(
      currentScore,
      id,
      target.closest(".plus") ? true : false
    );

    document.getElementById(id).querySelector(".score").textContent = newScore;
    // console.log()
  });
};

export const scoreInit = function (handler) {
  scoreUpdate(handler);
};
