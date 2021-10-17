import * as Contact from "./contact.js";
import * as Main from "./main.js";
import * as Menu from "./menu.js";

const CONTENT = document.getElementById("content");

function createMenu() {
  const header = document.createElement("div");

  const createButton = (name, callback) => {
    let button = document.createElement("button");
    button.textContent = name;
    button.addEventListener("click", callback);
    return button;
  };

  header.appendChild(createButton("Menu", Menu.create));
  header.appendChild(createButton("Main", Main.create));
  header.appendChild(createButton("Contact", Contact.create));

  return header;
}

CONTENT.appendChild(createMenu());
