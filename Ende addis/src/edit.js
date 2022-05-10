import { View } from "./view.js";

// const updateSec = `
//             <section class="comment-update flex">
//                 <form action="submit" class="comment-form">
//                     <textarea
//                     name="comment-field"
//                     class="update-field"
//                     id="wetpussy"
//                     id=""
//                     cols="30"
//                     rows="10"
//                     ></textarea>
//                 </form>

//                 <button class="btn btn-update">Update</button>
//             </section>
// `;
// let value, toBeEditedCommentCardId;

// const toggler = (target) => {
//   document.querySelector(".comment-update")?.remove();
//   target.closest(".delete-edit-container").classList.toggle("hidden");
// };

// const editor = function (handler) {
//   window.addEventListener("click", (e) => {
//     const target = e.target;

//     // GUARDKEY
//     if (target.closest(".edit-container")) {
//       const toBeEditedCommentCard = target.closest(".comment-card");
//       toBeEditedCommentCardId = toBeEditedCommentCard.dataset.id;

//       // if some editing is ALREADY TAKING PLACE
//       if (document.getElementById("wetpussy")) {
//         const wetpussy = document
//           .getElementById("wetpussy")
//           .closest(".comment-container");
//         const com = wetpussy.querySelector(".comment");

//         com.textContent = value;
//       }

//       // REMOVING already placed comment update with previous value

//       toggler(target);

//       // getting the data from the state to insure CONTROLED DATA MOVEMENT
//       const [content, replyingTo] = handler(toBeEditedCommentCardId);

//       value = replyingTo ? "@" + replyingTo + " " + content : content;

//       // Empitying the comment
//       toBeEditedCommentCard.querySelector(".comment").textContent = "";

//       // RENDERING the text Field
//       toBeEditedCommentCard
//         .querySelector(".comment-container")
//         .insertAdjacentHTML("beforeend", updateSec);

//       //   filling the Field with the content we got
//       document.getElementById("wetpussy").value = handler(
//         toBeEditedCommentCard
//       );
//     }

//     if (target.classList.contains("btn-update")) {
//       // const content = value.trim().split(' ').shift().join(' ');
//       // handler(toBeEditedCommentCardId, content );
//       // target.closest('.comment-container').querySelector('.comment') = value;
//       // target.closest('.comment-update').remove();
//       if (!+toBeEditedCommentCardId) {
//         const contentForReplies = value.trim().split(" ");

//         const replyingTo = contentForReplies.shift();
//         const updatedcontent = handler(
//           toBeEditedCommentCardId,
//           contentForReplies.join(" ")
//         );

//         document
//           .getElementById(toBeEditedCommentCardId)
//           .querySelector(".comment").textContent = updatedcontent;

//         document
//           .getElementById(toBeEditedCommentCardId)
//           .querySelector(".comment")
//           .insertAdjacentHTML(
//             "afterbegin",
//             `<span class='replying-to'>${replyingTo} </span>`
//           );
//       }

//       // value = '';
//       //   console.log("licked");
//     }
//   });
// };

// export const edit = function (handler) {
//   editor(handler);
// };

class Edit extends View {
  toBeEditedId;
  toBeEditedcomment;
  btnUpdate;
  updateField;
  _updateSection = `
            <section class="comment-update flex">
                <form action="submit" class="comment-form">
                    <textarea
                    name="comment-field"
                    class="update-field"
                    id="wetpussy"
                    id=""
                    cols="30"
                    rows="10"
                    ></textarea>
                </form>

                <button class="btn btn-update">Update</button>
            </section>
`;

  render(btnUpdate = false) {
    // render UPDATE-SECTION
    this.parentSet(this.toBeEditedId);
    if (!btnUpdate) {
      // EMPITYING the comment
      this.toBeEditedcomment.textContent = "";

      // removing comment field
      document.querySelector(".section-comment-send").remove();

      // RENDERING section update
      this._parentElement
        .querySelector(".comment-container")
        .insertAdjacentHTML("beforeend", this._updateSection);

      // setting the update Field
      this.updateField = document.getElementById("wetpussy");

      // FILLING the updatecommentSection with the previous COMMENT
      this.updateField.value = this._data.content;
    }
    // render UPDATED content
    if (btnUpdate) {
      this.updateField.closest(".comment-update").remove();

      // setting THE COMMENT TO ITS PREVIOUS VALUE
      this.toBeEditedcomment.insertAdjacentHTML(
        "beforeend",
        this._generateMarkup()
      );

      this._parentElement
        .querySelector(".delete-edit-container")
        .classList.remove("hidden");
    }
  }

  _generateMarkup() {
    return `
    ${
      this._data.replyingTo
        ? "<span class='replying-to'>@" +
          this._data.replyingTo +
          "</span> " +
          this._data.content
        : this._data.content
    }
    `;
  }

  events(handler) {
    // UPDATE HANDLER
    const btnUpdateHandler = (e) => {
      // console.log("clicked update");

      this._data.content = handler(this.toBeEditedId, this.updateField.value);

      this.render(true);
    };

    // EDIT HANDLER
    const editHandler = (e) => {
      const target = e.target;

      if (!target.closest(".edit-container")) return;

      // CHECKING if another editing is happening and removing appropriately
      if (this.updateField) {
        this.updateField.closest(".comment-update").remove();

        // setting THE COMMENT TO ITS PREVIOUS VALUE
        this.toBeEditedcomment.textContent = this._data.replyingTo
          ? "<span class='replying-to'>@" +
            this._data.replyingTo +
            "</span> " +
            this._data.content
          : this._data.content;
      }

      // retriving the id of the TOBE EDITED comment card
      this.toBeEditedId = target.closest(".comment-card").dataset.id;

      // getting the toBeEdited comment element
      this.toBeEditedcomment = document
        .getElementById(this.toBeEditedId)
        .querySelector(".comment");

      target.closest(".delete-edit-container").classList.add("hidden");

      // geting the current content of the comment
      this._data = handler(this.toBeEditedId);

      this.render();

      // removing if there is already btnUpdateListner
      this.btnUpdate?.removeEventListener("click", btnUpdateHandler);

      // SELECTING btn-update
      this.btnUpdate = document.querySelector(".btn-update");

      // adding EVENTlISTNER TO BTN-UPDATE
      this.btnUpdate.addEventListener("click", btnUpdateHandler);
    };

    // REMOVINGeventListner for windows with this handler if any
    window.removeEventListener("click", editHandler);

    // Listninig to CLLICK event to handle edit
    window.addEventListener("click", editHandler);
  }

  init(handler) {
    this.events(handler);
  }
}

export const edit = new Edit();
