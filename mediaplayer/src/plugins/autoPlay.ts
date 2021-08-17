import MediaPlayer from "./mediaPlayer";

class autoPlay {
    constructor() {}
    run(player: MediaPlayer) {
        if (!player.media.muted) {
            player.media.muted = true;
        }
        player.play();
    }
}

export default autoPlay;
