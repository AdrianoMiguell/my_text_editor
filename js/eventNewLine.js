import newLine from "./newLine.js";
import contructOption from "./contructOption.js";
import eventOpenMenu from "./eventOpenMenu.js";
import checkedLines from "./checkedLines.js";

const eventNewLine = function (i) {
  const content = document.querySelectorAll(".content");

  if (content[i] != undefined) {
    content[i].addEventListener("keyup", (tec) => {
      if (tec.keyCode == 13) {
        blockNewLine(i);
        newLine(i);
        contructOption(i + 1);
        eventOpenMenu();
        checkedLines();
        eventNewLine(i + 1);
      } else {
        // console.log("tecla tab clicada!");
      }
      // if (tec.keyCode == 9) {
      // }
    });
  }
};

function blockNewLine(e) {
  const textLine = document.querySelectorAll(".content .text-line");
  let textEnter = textLine[e].textContent.split("\n");
  textLine[e].innerHTML = textEnter[0];
}

export default eventNewLine;
