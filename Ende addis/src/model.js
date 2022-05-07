import { async } from "regenerator-runtime";
import { fetcher } from "./helper.js";

// console.log("i am working");
export const state = { currentUser: { userName: "", image: {} }, comments: [] };

// ////////////////////////////////////////////////     populating the state data
const createStateObject = function (data) {
  state.currentUser.userName = data.currentUser.username;
  state.currentUser.image = data.currentUser.image;
  state.comments = data.comments;
};

////////////////////////////////////////////////         getting the data from the local file
export const dataLoader = async function () {
  try {
    // const data = await fetcher();

    createStateObject(data);

    console.log(state);
  } catch (err) {
    throw err;
  }
};

// ////////////////////////////////////////         INITIALIZER
const init = function () {
  dataLoader();
};

// init();

fetch("../data.json")
  .then((res) => res.json())
  .then((data) => console.log(data));
