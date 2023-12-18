import changeOption from "./editOptions/changeOption.js";
import optionController from "./editOptions/functions/optionController.js";
import getDataOptions from "./getDataOptions.js";

const constructOption = async function (i) {
  const newContent = document.querySelector(".newLine");
  let divOptions = document.querySelector(".newLine .div-options");

  if (divOptions != undefined) {
    divOptions.innerHTML = "";

    let btnOpenOptions = document.createElement("button");
    btnOpenOptions.setAttribute("class", "btn-open-options");
    btnOpenOptions.setAttribute("tabindex", "2");
    btnOpenOptions.innerHTML = `<i class="bi bi-list"></i>`;
    divOptions.appendChild(btnOpenOptions);

    let testDivOptionsDisp = document.querySelector(`.div-options-${i}`);
    if (testDivOptionsDisp == undefined) {
      divOptions.innerHTML += `<div class="div-options-disp div-options-${i}">
        <span class='titleOption'> Opções </span>
      </div>`;
    }

    let divOptionsDisp = document.querySelector(`.div-options-${i}`);

    if (divOptionsDisp != undefined) {
      let jsonOptions = await getDataOptions();

      let optionsName = jsonOptions.options.name;
      let optionsImg = jsonOptions.options.img;
      let optionsClass = jsonOptions.options.class;

      // Caminho para a imagem relativo ao endereço raiz
      let path = "/src/img/imgOptions/";
      // Construir a URL completa
      let urlComp = window.location.origin + path;

      for (let op in optionsName) {
        let divBlockOption;

        switch (optionsClass[op]) {
          case "image":
            // uploaddata
            divBlockOption = `
            <form action='/' method='post' enctype='multipart/form-data' class='blockOption blockOption-${
              optionsName[op]
            }-${i}'>
                <label for='input_image-${i}' style='width: 100%; cursor: pointer !important;'> 
                
                <img src='${urlComp + optionsImg[op]}' />
                <span> ${optionsName[op]} </span>
                
                <input type='file' style='display: none;' name='input_image' id='input_image-${i}'">
                </label>
                </form>`;

            break;

          default:
            divBlockOption = `<div class='blockOption blockOption-${
              optionsName[op]
            }-${i}'> 
            <img src='${urlComp + optionsImg[op]}' />
            <span> 
                ${optionsName[op]} 
              </span>
              </div>`;
            break;
        }

        divOptionsDisp.innerHTML += divBlockOption;
      }

      const opts = document.querySelectorAll(`.div-options-${i} .blockOption`);
      let inpImage = document.querySelector(`#input_image-${i}`);

      inpImage.addEventListener("input", () => {
        optionController("image", i);
      });

      for (let o = 0; o < opts.length; o++) {
        opts[o].addEventListener("click", () => {
          changeOption(optionsClass[o], ".line-" + i, i);
        });
      }
    }
  } else {
    console.log("Linha Desconhecida");
  }

  if (newContent.classList.contains("newLine")) {
    setTimeout(() => {
      newContent.classList.remove("newLine");
    }, 100);
  }
};

export default constructOption;
