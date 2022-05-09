export class View {
  _data;
  _parentElement;

  render(data, parentElId, replies = false, byCurret) {
    this._data = data;

    // generating the markup
    const markup = this._generateMarkup(replies, byCurret);

    // This will allow us to OVERIDE any parent setting made before rendering
    if (parentElId) this.parentSet(parentElId);
    // RENDERING the replied markup to the dom
    this._parentElement.insertAdjacentHTML("beforeend", markup);

    if (byCurret) {
      const thisComment = document.getElementById(this._data.id);
      const deleteEditConta = thisComment.querySelector(
        ".delete-edit-container"
      );

      setTimeout(() => {
        deleteEditConta.remove();
        thisComment.insertAdjacentHTML("beforeend", this.reply);
      }, 30000);
    }

    if (this._data.replies && this._data.replies.length >= 1) {
      this.repliedContainerSetter(this._data.id + "RC");
      // RENDERING the replied container
      // this._parentElement.insertAdjacentHTML(
      //   "beforeend",
      //   this.repliedContainer
      // );

      // RENDERING each REPLIED message
      this._data.replies.forEach((reply) => {
        this.render(reply, parseInt(this._data.id) + "RC", true);
      });
    }
  }

  parentSet(id) {
    this._parentElement = document.getElementById(id);
  }
}
