import MediaPlayer from "@leninner/platzimediaplayer";
import autoPlay from "@leninner/platzimediaplayer/lib/autoPlay";
import autoPause from "@leninner/platzimediaplayer/lib/autoPause";
import AdsPlugin from "@leninner/platzimediaplayer/lib/Ads";

const video = document.querySelector("video"); // Cuando es el único elemento no es necesario ponerlo con el identificar de selector
const player = new MediaPlayer({
    el: video,
    plugins: [new autoPlay(), new autoPause(), new AdsPlugin()],
});

// Creando una instancia de la función constructora, le debemos pasar un objeto con la llave (el) y la data que es el (video).
//NOTE: (el) es un nombre de llave, lo que significa que si podremos cambiarlo después

const btnPlayPause: HTMLElement = document.querySelector("#btnPlayPause"),
    btnMuteUnmute: HTMLElement = document.querySelector("#btnMuteUnmute");

btnPlayPause.onclick = () => player.togglePlay();
btnMuteUnmute.onclick = () => player.toggleMuted();

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").catch((error) => {
        console.error(error);
    });
}
