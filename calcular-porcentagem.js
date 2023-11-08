const btnCalcular = document.querySelector(".btn");
btnCalcular.addEventListener("click", calcularPorcentagem);

function calcularPorcentagem() {
  const quantidadeVideos = Number(document.querySelector("#quantidade-videos").value);
  const tipoConsulta = document.querySelector("input[name='tipo-consulta']:checked").value;

  const porcentagem = calcularPorcentagem(quantidadeVideos, tipoConsulta);

  const resultadoPorcentagem = document.querySelector(".porcentagem");
  resultadoPorcentagem.textContent = porcentagem.toFixed(3);

  const resultadoConsulta = document.querySelector(".resultado");
  resultadoConsulta.textContent = tipoConsulta;
}

function calcularPorcentagem(quantidadeVideos, tipoConsulta) {
  switch (tipoConsulta) {
    case "original":
      return quantidadeVideos * 100 / 30;
    case "re-creation":
      return quantidadeVideos * 100 / 100;
    case "high-vertical-middle-random":
      if (quantidadeVideos >= 90) {
        return 90;
      } else if (quantidadeVideos >= 60) {
        return 60;
      } else {
        return 0;
      }
    default:
      return undefined;
  }
}
