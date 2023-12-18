const optionController = (opt, id) => {
  const refContent = document.querySelector(`.content-${id}`);
  const refLine = document.querySelector(`.line-${id}`);

  // além de selecionar, verificar se ele tem o

  console.log("Chegou no controller");

  switch (opt) {
    case "image":
      let form_image = document.querySelector(`.blockOption-${opt}-${id}`);
      let input_image = document.getElementById(`input_image-${id}`);

      let filename = "/src/img/uploads/" + input_image.files[0].name;

      refLine.innerHTML = `<img src='${filename}' class='image-${id}' >`;

      console.log(
        window.location.origin + "/src/img/uploads/" + input_image.files[0].name
      );
      // console.log();

      form_image.submit();

      break;

    default:
      break;
  }

  // function hasClass (elemento, classe) {
  //     return (' ' + elemento.className + ' ').indexOf (' ' + classe + ' ') > -1;
  //   }

  //   // seleciona todos os elementos com a classe panel
  //   var panels = document.querySelectorAll(".panel");

  //   // percorre cada elemento panel
  //   for (var i = 0; i < panels.length; i++) {
  //     // verifica se o elemento panel tem um filho com a classe controls
  //     if (hasClass(panels[i].firstElementChild, "controls")) {
  //       // altera o estilo do elemento panel
  //       panels[i].style.paddingRight = "10px";
  //     }
  //   }
};

export default optionController;
