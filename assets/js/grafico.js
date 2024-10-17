import { getCSS } from "./commun.js";

async function quantidadeNoticias() {
  const url = 'assets/json/dados-fake-news.json';
  const res = await fetch(url);
  const dados = await res.json();
    
  const tiposNoticias = Object.keys(dados);
  const quantidadeNoticias = Object.values(dados);

  var data = [{
    type: "pie",
    values: quantidadeNoticias,
    labels: tiposNoticias,
    textinfo: "label+percent",
    insidetextorientation: "horizontal", 
    automargin: true,                     
      text: 'Dados sobre as Notícias',
      font: {
          family: 'Arial, sans-serif',
          size: 24,
          color: getCSS('--cor-secundaria')  
    },
    textfont: {
      color: getCSS('--cor-do-texto'),  
      size: 14,
    },
    marker: {
      colors: [getCSS('--cor-secundaria'), '#FF6347', '#3CB371'],  
    }
  }];

  var layout = {
    height: 500,
    width: 700,  
    paper_bgcolor: getCSS('--cor-de-fundo'),
    plot_bgcolor: getCSS('--cor-de-fundo'),
    margin: {
      l: 50, r: 50, b: 50, t: 100,   
    },
    title: {
      text: 'Dados sobre as Notícias',
      font: {
        family: getCSS('--font'),
        size: 24,
        color: getCSS('--cor-secundaria')
      },
      xanchor: 'center',  
      y: 0.9              
    }, 
    showlegend: true,
    legend: {
      x: 2.5,          
      y: 1,         
      xanchor: 'right',
      yanchor: 'top' , 
    }
  };

  const grafico = document.createElement('div');
  grafico.className = 'grafico';
  document.getElementById('graficos-container').appendChild(grafico);
  Plotly.newPlot(grafico, data, layout);
}

quantidadeNoticias();
