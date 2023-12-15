import newLine from "./newLine.js";
import contructOption from "./contructOption.js";
import eventOpenMenu from "./eventOpenMenu.js";
import checkedLines from "./checkedLines.js";

const eventNewLine = function (i) {
  // console.log("Valor do i do eventNewLine: " + i);
  let content = document.querySelectorAll(".content");

  if (content[i] != undefined) {
    content[i].addEventListener("keyup", (tec) => {
      if (tec.ctrlKey == true && tec.keyCode == 13) {
        let textLines = document.querySelectorAll(".content .text-line");

        if (textLines[i + 1] != undefined) {
          // existe um elemento depois, então não crie nenhuma nova linha
          let actualContent = document.querySelector(`.content-${i + 1}`);
          let activeContent = document.querySelector(`.is__active`);

          // console.log("Novo is__active");
          activeContent.classList.remove("is__active");
          actualContent.classList.add("is__active");

          textLines[i + 1].focus();
        } else {
          newLine(i + 1);
          contructOption(i + 1);
          eventOpenMenu(i + 1);
          checkedLines();
          eventNewLine(i + 1);
        }
      }
    });
  }
};

export default eventNewLine;
