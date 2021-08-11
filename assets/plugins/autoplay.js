function autoPlay() {}

autoPlay.prototype.run = function (player) {
    player.mute();
    player.play();
};

export default autoPlay;
