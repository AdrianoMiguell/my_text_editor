import getDataOptions from "../getDataOptions.js";
import removeTags from "./functions/removeTags.js";
import optionController from "./functions/optionController.js";

const changeOption = async (opt, line, id) => {
  const lineActual = document.querySelector(line);

  let jsonOptions = await getDataOptions();
  let optionsClass = jsonOptions.options.class;

  optionsClass.forEach((elemClass) => {
    if (lineActual.classList.contains(elemClass)) {
      
      if(elemClass == 'image') {
        console.log("Tem imagem");
        removeTags(line);
      }

      lineActual.classList.remove(elemClass);
    }
  });

  lineActual.classList.add(opt);

  // if(opt == "image") {
  //   optionController(opt, id);
  // }
};

export default changeOption;
