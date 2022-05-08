import { View } from "./view.js";

class CommentField extends View {
  _parentElement = document.querySelector(".comment-section ");
  _btnSend;

  /* ================================================== the RENDER METHOD ========================================= */

  render(data, parentElId, sendHandler) {
    if (parentElId) this.parentSet(parentElId);
    // console.log(this._parentElement);
    this._data = data;

    // generating the markup
    const markup = this._generateMarkup();

    // RENDERING the replied markup to the dom
    this._parentElement.insertAdjacentHTML("beforeend", markup);

    // calling the eventListner initializer with the event handler
    this.events(sendHandler);
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

  events(sendHandler) {
    this._textarea = document.querySelector(".comment-field");

    // this is because we cannot select what doesnt exist..
    this._btnSend = document.querySelector(".btn-send");

    const handler = () => {
      console.log("clicked");
      if (!this._textarea.value) return;
      sendHandler(this._textarea.value);

      this._textarea.value = null;
    };

    this._btnSend.removeEventListener("click", handler);

    // EVENT LSTNER FOR send-btn
    this._btnSend.addEventListener("click", handler);
  }
}

export const field = new CommentField();
