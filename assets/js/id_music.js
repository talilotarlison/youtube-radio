// função antiga de adicionar na tela com concatenação de string e variaveis.
function adicionarMusic(){
  
  var myMusicInput = document.getElementById("linkMusic").value;
  var myMusicInputId = myMusicInput.substr(17);
  var linkMusicNaTela = document.getElementById("video");
  
  var linkIframe = `<iframe width="670" height="640" src="https://www.youtube.com/embed/${myMusicInputId}" title="player" frameborder="0" allow="autoplay; clipboard-write;"></iframe>`;

  var linkArtista = `<h1><font color="white">YouTube Music</font><h1><h2><font color="gray">Reproduzindo agora</font></h2>`;
  
  var linkFinal = linkIframe + linkArtista;

  linkMusicNaTela.innerHTML = linkFinal;
  console.log(linkFinal)

  document.getElementById("linkMusic").value = "";

}

// Função de musica aleatoria com array separados dos id dos videos e nome das musicas
var listaMusicId = [ "ieWe5AW1uNY",
  "EL2R3vszMPQ",
  "qO2dR1tXGTY",
  "pWX4OzyGo5w",
  "UgfsbL-uHOA",
  "k1JHlNIZo74",
  "JKPp3Kshb7c",
  "sje0ZZZwJaA",
  "OcnrboRX0lQ",
  "7MhCwXstCRM",
  "e6QhH3q-UJE"
];

var listaArtista = ["Justin Bieber - MY Word",
"MUSE - Greatest Hits ",
"Guns N Roses - Greatest Hit",
"Coldplay - Greatest Hit",
"Top 100 Best Classic Rock Of All Time",
"Wesley Safadão - Atualizado",
"Justin Bieber - Justice",
"Nattan - Atualizado",
"Justin Bieber - Change",
"Justin Bieber - freedom",
"The Beatles - As melhores"
];




function musicAleatoria(){
  var musicEscolhida = Math.floor(Math.random() * 11)
  console.log(musicEscolhida)

  var linkMusicNaTela = document.getElementById("video");

  var linkIframe = `<iframe width="670" height="640" src="https://www.youtube.com/embed/${listaMusicId[musicEscolhida]}" title="player" frameborder="0" allow="autoplay; clipboard-write;"></iframe>`;
console.log(linkIframe);
  var linkArtista = `<h1><font color="white"> ${listaArtista[musicEscolhida]}</font><h1><h2><font color="gray">Reproduzindo agora</font></h2>`;
  var linkFinal = linkIframe + linkArtista;

  linkMusicNaTela.innerHTML = linkFinal;



}

