// import * as model from "./src/model.js";
import comment from "./src/commentView.js";
// import { async } from "regenerator-runtime";
// import commentView from "./src/commentView.js";
fetch("../data.json")
  .then((res) => res.json())
  .then((data) => {
    comment.render(data.comments[0]);
    comment.render(data.comments[1]);
  });
