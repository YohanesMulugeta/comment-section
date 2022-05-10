const rootC = document.body;
let toBeDeletedCommentId;
const popupConta = `
        <div class="delete-popup">
            <div class="overlay"></div>
            <div class="popup-card flex">
            <p class="popup-header">Delete comment</p>
            <p>
                Are you sure you want to delete this comment? This will remove the comment
                and it can't be undone.
            </p>
            <footer class="popup-footer flex">
                <button class="btn-cancel btn">no, cancel</button>
                <button class="btn-yes btn">yes, delete</button>
            </footer>
            </div>
        </div>
`;

export const deleteComment = function (deleteHandler) {
  const overlayHandle = (e) => {
    //   DELLETING
    if (e.target.classList.contains("btn-yes")) {
      deleteHandler(toBeDeletedCommentId);

      document.getElementById(toBeDeletedCommentId).remove();
      document.querySelector(".delete-popup").remove();
    }

    // CANCELLING
    if (
      e.target.classList.contains("btn-cancel") ||
      e.target.classList.contains("overlay")
    ) {
      //   document.getElementById(commentId).remove();
      console.log("click");
      document.querySelector(".delete-popup").remove();
    }
  };

  const overlayPass = (e) => {
    overlayHandle(e, this);
  };

  const handleDe = function (e) {
    if (!e.target.closest(".delete-container")) return;
    toBeDeletedCommentId = e.target.closest(".comment-card").dataset.id;

    // RENDERING the popup
    rootC.insertAdjacentHTML("beforeend", popupConta);

    // REMOVING event listner if any
    rootC.removeEventListener("click", overlayPass);

    // ATTACHING eventListner
    rootC.addEventListener("click", overlayPass);

    // deleteHandler(toBeDeletedCommentId.dataset.id);
  };

  window.addEventListener("click", handleDe);
};
