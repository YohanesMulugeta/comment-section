export const editor = function (handler) {
  window.addEventListener("click", (e) => {
    const target = e.target;

    // GUARDKEY
    if (!target.closest(".edit-container")) return;


