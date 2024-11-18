import { getCSS, criarGrafico, incluirTexto } from "./commun.js";

async function quantidadeRespostas() {
  const dadosLocaisString = localStorage.getItem("respostasQuestionario");
  if (dadosLocaisString) {
    const dadosLocais = JSON.parse(dadosLocaisString);
    processarDados(dadosLocais);
  } else {
    const url = "assets/json/respostasQuestionario.json";
    const res = await fetch(url);
    const dados = await res.json();
    localStorage.setItem("respostasQuestionario", JSON.stringify(dados));
    processarDados(dadosLocais);
  }
}

function processarDados(dados) {
  incluirTexto(`A partir do <span>Google Forms</span>, elaboramos um questionário para realizar uma pesquisa sobre <span>Fake News</span> em nossa sala de aula. Assim, foi possível tratar os dados para desenvolver os gráficos a seguir e demonstrar os resultados das pesquisas.`)
  Object.keys(dados).forEach((pergunta, index) => {
    const resposta = Object.keys(dados[pergunta]);
    const quantidadeRespostas = Object.values(dados[pergunta]);

    var data = [
      {
        type: "pie",
        values: quantidadeRespostas,
        labels: resposta,
        textinfo: "label+percent",
        text: pergunta,
        font: {
          family: "Arial, sans-serif",
          size: 24,
          color: getCSS("--cor-secundaria"),
        },
        textfont: {
          color: getCSS("--cor-do-texto"),
          size: 14,
        },
        marker: {
          colors: [getCSS("--cor-secundaria"), "#FF6347", "#3CB371"],
        },
      },
    ];

    
    var layout = {
      paper_bgcolor: getCSS("--cor-de-fundo"),
      plot_bgcolor: getCSS("--cor-de-fundo"),
      height: 610, 
      width: 1500, 
      title: {
        text: pergunta,
        font: {
          family: getCSS("--font"),
          size: 24,
          color: getCSS("--cor-secundaria"),
        },
      },
      margin: {
        l: 50,
        r: 50,
        t: 100,
        b: 100, 
      },
      legend: {
        font: {
          color: getCSS("--cor-do-texto"),
          family: getCSS("--font"),
          size: 14,
        },
        x: 0,
        y: -0.3,
        orientation: "v", 
        itemwidth: 200,
      },
    };

    
    const chartDiv = document.createElement("div");
    chartDiv.id = `chart-${index}`;
    document.querySelector("#graficos-container").appendChild(chartDiv);

    criarGrafico(data, layout, chartDiv.id);
  });
}

quantidadeRespostas();
