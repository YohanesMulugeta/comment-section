import { View } from "./view.js";

class CommentField extends View {
  _parentElement = document.querySelector(".comment-section ");
  _btnSend;

  /* ================================================== the RENDER METHOD ========================================= */

  render(data, rcIdcId, sendHandler, haveReplies = true) {
    // getting the ParentElId and the Comment replying to id
    const [parentElId, cId] = rcIdcId ? rcIdcId.split("to") : [null, null];

    const commentFieldContainer = document.querySelector(
      ".section-comment-send"
    );

    if (parentElId && !haveReplies) {
      /* ======================================= this CREATES the REPLIED-CONTAINER in the dom ===================== */
      const rc = document.createElement("div");

      // `<div class="replied-container flex" id = "${id}" data-id = "${id}"></div>`;
      rc.classList.add("replied-container");
      rc.classList.add("flex");

      rc.id = rc.dataset.id = parentElId;

      document.getElementById(parseInt(parentElId)).after(rc);

      this.parentSet(parentElId);
    }

    if (parentElId && haveReplies) this.parentSet(parentElId);

    // console.log(this._parentElement);
    this._data = data;

    if (
      commentFieldContainer?.parentElement.classList.contains(
        "replied-container"
      ) &&
      !commentFieldContainer.parentElement.querySelector(".comment-card")
    ) {
      const nullConta = commentFieldContainer.parentElement;

      // console.log();
      commentFieldContainer.remove();
      nullConta.remove();
    }
    // REMOVING THE ALREADY EXISTED COMMENT FIELD
    commentFieldContainer?.remove();

    // generating the markup
    const markup = this._generateMarkup();

    // OVERIDING ANY ParentElement settings if no id is provided
    if (!rcIdcId)
      this._parentElement = document.querySelector(".comment-section ");

    // RENDERING the replied markup to the dom
    this._parentElement.insertAdjacentHTML("beforeend", markup);
    // console.log(document.getElementById(parentElId));

    // calling the eventListner initializer with the event handler
    this.events(sendHandler, cId);
  }

  //  ====================================================== MARKUP GENERATOR =========================================

  _generateMarkup() {
    return `
    <section class="section-comment-send grid grid--2-cols">
        <form action="submit" class="comment-form">
            <textarea
            name="comment-field"
            class="comment-field"
            id=""
            cols="30"
            rows="10"
            placeholder="Add a comment..."
            ></textarea>
        </form>

        <img
            class="avatar-typing"
            src="${this._data.image.png}"
            alt="photo of ${this._data.username}"
        />
        <button class="btn btn-send">Send</button>
    </section>
    `;
  }

  /*============================================ SEND BUTTON event listning and handling ========================== */

  events(sendHandler, cId) {
    this._textarea = document.querySelector(".comment-field");

    // this is because we cannot select what doesnt exist..
    this._btnSend = document.querySelector(".btn-send");

    const handler = () => {
      // console.log("clicked");
      if (!this._textarea.value) return;
      sendHandler(this._textarea.value, cId);

      this._textarea.value = null;
    };

    this._btnSend.removeEventListener("click", handler);

    // EVENT LSTNER FOR send-btn
    this._btnSend.addEventListener("click", handler);
  }
}

export const field = new CommentField();
