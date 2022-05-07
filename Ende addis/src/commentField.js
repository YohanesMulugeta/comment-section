import { View } from "./view.js";

class CommentField extends View {
  _parentElement = document.querySelector(".comment-section ");
  _btnSend;

  // ////////////////////////////////////////          MARKUP GENERATOR
  //////////////////////////////////////////

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

  //////////////////////////////////////////              INITIALIZER
  /////////////////////////////////////////

  init(data, sendHandler) {
    this.render(data);
    this.events(sendHandler);

    this._textarea = document.querySelector(".comment-field");
  }

  ///////////////////////////////////////       SEND BUTTON EVENT LISTNING AND HANDLING
  //////////////////////////////////////

  events(sendHandler) {
    // this is because we cannot select what doesnt exist..
    this._btnSend = document.querySelector(".btn-send");

    // EVENT LSTNER FOR send-btn
    this._btnSend.addEventListener("click", () => {
      if (!this._textarea.value) return;
      sendHandler(this._textarea.value);

      this._textarea.value = null;
    });
  }
}

export const field = new CommentField();
