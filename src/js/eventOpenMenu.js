import checkedLines from "./checkedLines.js";

const eventOpenMenu = function (i) {
  checkedLines();
  const actualContent = document.querySelector(`.content-${i}`);
  let activeContent = document.querySelector(`.is__active`);

  activeContent.classList.remove("is__active");
  actualContent.classList.add("is__active");

  actualContent.addEventListener("click", () => {
    let activeContent = document.querySelector(`.is__active`);

    activeContent.classList.remove("is__active");
    actualContent.classList.add("is__active");
    // }
  });

  // for (let i = 0; i < content.length; i++) {
  //   if (content[i] != undefined) {
  //     content[i].addEventListener("click", () => {
  //       for (let a = 0; a < content.length; a++) {
  //         if (i == a) {
  //
  //         } else {
  //           if (content[i].classList.contains("is__active")) {
  //             content[a].classList.remove("is__active");
  //             console.log("Contem o active");
  //           }
  //         }
  //       }
  //     });
  //     console.log("Dentro do if do open menu");
  //   }
  // }
};

export default eventOpenMenu;
