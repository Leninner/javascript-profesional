import MediaPlayer from "./mediaPlayer.js";
import autoPlay from "./plugins/autoplay.js";

const video = document.querySelector("video"); // Cuando es el único elemento no es necesario ponerlo con el identificar de selector
const player = new MediaPlayer({ el: video, plugins: [new autoPlay()] }); // Creando una instancia de la función constructora, le debemos pasar un objeto con la llave (el) y la data que es el (video).
//NOTE: (el) es un nombre de llave, lo que significa que si podremos cambiarlo después

const button = document.querySelector("button");
button.onclick = () => player.togglePlay();
