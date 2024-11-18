import { getCSS, criarGrafico, incluirTexto } from "./commun.js";

async function quantidadeNoticias() {
  const url = "assets/json/dados-fake-news.json";
  const res = await fetch(url);
  const dados = await res.json();

  const tiposNoticias = Object.keys(dados);
  const quantidadeNoticias = Object.values(dados);

  var data = [
    {
      type: "pie",
      values: quantidadeNoticias,
      labels: tiposNoticias,
      textinfo: "label+percent",
      text: "Dados sobre as Notícias",
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
    height: 700,
    title: {
      text: "Dados sobre as Notícias",
      font: {
        family: getCSS("--font"),
        size: 24,
        color: getCSS("--cor-secundaria"),
      },
    },
    legend: {
      font: {
        family: getCSS("--font"),
        size: 16
    }
  }
  };

  criarGrafico(data, layout);
  incluirTexto(
    `Os dados utilizados neste site foram obtidos a partir do repositório <span> FakeNewsCorpus </span> de <span> diversos27 </span> no GitHub. Com base nesses dados, desenvolvi uma API que alimenta os gráficos acima, permitindo a visualização dos resultados das pesquisas sobre notícias na internet. `
  );
}

quantidadeNoticias();
