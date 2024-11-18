import { getCSS, criarGrafico , incluirTexto} from "./commun.js";
const url = "assets/json/dados-fake-news.json";

async function visualizarInformacoes() {
  const res = await fetch(url);
  const dados = await res.json();
  const informacoesConfiaveis = (dados.Confiavel / 1e6).toFixed(2);
  const informacoesFalsas = Math.round(dados.fake/ 1e3);
  const inforamcoesStaria = Math.round(dados.satira/ 1e3);
  const informacoesExtremas = (dados["Viés extremo"]/ 1e6).toFixed(2);
  const inforamcoesConspiracao = Math.round(dados["Teoria da conspiração"]/ 1e3);
  const inforamcoesOdio = Math.round(dados["Notícias de ódio"]/ 1e3);
  const inforamcoesCienciaLixo = Math.round(dados["Ciência Lixo"]/ 1e3);
  const inforamcoesIscaDeClick = Math.round(dados["Isca de clique"]/ 1e3);
  const inforamcoesCautela = Math.round(dados["Prossiga com cautela"]/ 1e3);
  const inforamcoesPolitica = (dados.Político/ 1e6).toFixed(2);

  incluirTexto(`De acordo com os dados obtidos, dentre as notícias compartilhadas, aproximadamente <span>${informacoesConfiaveis} milhões</span> de notícias são confiáveis, enquanto <span>${informacoesFalsas} mil</span> são notícias falsas. 
  Também temos <span>${inforamcoesStaria} mil</span> notícias de sátira e <span>${informacoesExtremas} milhões</span> que apresentam viés extremo. Além disso, <span>${inforamcoesConspiracao} mil</span> se destacam como teorias da conspiração, 
  enquanto <span>${inforamcoesOdio} mil</span> refletem conteúdos de ódio. O estado, por sua vez, não apresenta notícias. 
  A categoria de <span>${inforamcoesCienciaLixo} mil</span> demonstra a desinformação em ciência. Além disso, <span>${inforamcoesIscaDeClick} mil </span> são noticias fornecem conteúdo geralmente confiável, mas usam títulos, descrições de mídia social e/ou imagens exageradas, enganosas ou questionáveis, 
  e <span>${inforamcoesCautela} mil</span> servem como aviso. Finalmente, <span>${inforamcoesPolitica} milhões</span> indicam notícias relacionadas a política.`)
  
  const container = document.getElementById("graficos-container");
  container.appendChild(paragrafo);
}
visualizarInformacoes();