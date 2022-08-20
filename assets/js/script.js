function adicionarMusic() {


var myMusicDoHtml = document.getElementById("linkMusic");
var myMusicInput = myMusicDoHtml.value;
var myMusicInputID = myMusicInput.substr(17) 

var tocando = document.getElementById("faixa");
var reprozuzindo = "<p>Reproduzindo agora</p>"

var linkMusicNaTela = document.getElementById("video");
var linkEmbedID = "https://www.youtube.com/embed/" + myMusicInputID
var linkIframe = '<iframe width="400" height="400" src="' +linkEmbedID+ '" title="player" frameborder="0" allow="autoplay; clipboard-write;"></iframe>'
var linkFinal = linkIframe

console.log(linkFinal)

linkMusicNaTela.innerHTML = linkFinal
tocando.innerHTML= reprozuzindo


}











