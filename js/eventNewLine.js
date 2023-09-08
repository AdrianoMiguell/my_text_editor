import newLine from "./newLine.js";
import contructOption from "./contructOption.js";
import eventOpenMenu from "./eventOpenMenu.js";
import checkedLines from "./checkedLines.js";

const eventNewLine = function (i) {
  const content = document.querySelectorAll(".content");

  if (content[i] != undefined) {
    content[i].addEventListener("keyup", (tec) => {
      if (tec.ctrlKey == true && tec.keyCode == 13) {
        newLine(i);
        contructOption(i + 1);
        eventOpenMenu();
        checkedLines();
        eventNewLine(i + 1);
      }
    });
  }
};

export default eventNewLine;
