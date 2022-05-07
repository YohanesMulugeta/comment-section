import View from "./view";

class CommentField extends View {
  _parentElement = document.querySelector(".comment-section ");

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
            src="/images/avatars/image-amyrobson.png"
            alt="photo of amyrobson"
        />
        <button class="btn btn-send">Send</button>
    </section>
    `;
  }
}
