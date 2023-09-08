import setColor from "./editOptions/setColor.js";
import selectOption from "./editOptions/selectOption.js";
import checkedLines from "./checkedLines.js";

const eventOpenMenu = function () {
  checkedLines();
  const content = document.querySelectorAll(".content");

  for (let i = 0; i < content.length; i++) {
    if (content[i] != undefined) {
      content[i].addEventListener("click", () => {
        for (let a = 0; a < content.length; a++) {
          if (i == a) {
            content[i].classList.add("is__active");
            selectOption();
            setColor();
          } else {
            if (content[i].classList.contains("is__active")) {
              content[a].classList.remove("is__active");
            }
          }
        }
      });
    }
  }
};

export default eventOpenMenu;
