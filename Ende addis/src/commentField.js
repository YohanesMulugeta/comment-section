import { View } from "./view.js";

class CommentField extends View {
  _parentElement = document.querySelector(".comment-section ");
  _btnSend;
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

  init(data) {
    this.render(data);
  }

  events() {
    this._btnSend = document.querySelector(".btn-send");

    this._btnSend.addEventListener("click", (e) => {
      console.log(document.querySelector(".comment-field").value);
    });
  }
}

export const field = new CommentField();
