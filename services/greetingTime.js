const greeting = document.querySelector(".intro__title-greeting");
const greetingName = document.querySelector(".intro__title-name");

const getTimeOfDay = () => {
  const date = new Date();
  const hours = date.getHours();

  if (hours > 5 && hours <= 10) {
    greeting.innerHTML = "Доброе утро";
  } else if (hours > 10 && hours <= 16) {
    greeting.innerHTML = "Доброе день";
  } else if (hours > 16 && hours <= 21) {
    greeting.innerHTML = "Доброе вечер";
  } else {
    greeting.innerHTML = "Доброй ночи";
  }
};

let currentName = "";

const blurElement = () => {
  const enteredТame = greetingName.textContent;

  if (enteredТame.length < 3) {
    greetingName.innerHTML = currentName;
  } else {
    localStorage.setItem("name", enteredТame);
  }
  greetingName.classList.remove("active-field");
};

const focusElement = (event) => {
  currentName = greetingName.textContent;
  event.target.classList.add("active-field");
};

const keydownElement = (event) => {
  if (event.code === "Enter") {
    greetingName.blur();
    blurElement();
  }
};
const loadNameIsLocalStoradge = () => {
  if (localStorage.getItem("name")) {
    greetingName.textContent = localStorage.getItem("name");
  }
};

greetingName.addEventListener("focus", focusElement);
greetingName.addEventListener("blur", blurElement);
greetingName.addEventListener("keydown", keydownElement);
window.addEventListener("load", loadNameIsLocalStoradge);

getTimeOfDay();
