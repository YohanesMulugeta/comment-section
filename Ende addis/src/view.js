export class View {
  _data;
  _parentElement;

  render(data, replies = false) {
    this._data = data;

    // generating the markup
    const markup = this._generateMarkup(replies);

    // RENDERING the replied markup to the dom
    this._parentElement.insertAdjacentHTML("beforeend", markup);

    if (this._data.replies && this._data.replies.length >= 1) {
      // RENDERING the replied container
      this._parentElement.insertAdjacentHTML(
        "beforeend",
        this.repliedContainer
      );

      // RENDERING each REPLIED message
      this._data.replies.forEach((reply) => {
        this.render(reply, true);
      });
    }
  }
}
