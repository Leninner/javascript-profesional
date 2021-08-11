// Función constructora
function MediaPlayer(config) {
    // Recibe un objeto y accede a la data de la llave (el); también podemos cambiar la manera de acceder a la data de config, se puede cambiar (el).
    this.media = config.el;
    this.plugins = config.plugins || [];
    this._initPlugins();
}

// Métodos añadidos al prototype
// No se puede utilizar funciones de flecha en métodos de las funciones.

MediaPlayer.prototype._initPlugins = function () {
    this.plugins.forEach((plugin) => {
        plugin.run(this);
    });
};

MediaPlayer.prototype.play = function () {
    this.media.play();
};

MediaPlayer.prototype.pause = function () {
    this.media.pause();
};

//Toggle (alternar) sirve para alternar los movimientos
MediaPlayer.prototype.togglePlay = function () {
    if (this.media.paused) {
        //.paused sirve para comprobar si el video está pausado o no
        this.play();
    } else {
        this.pause();
    }
};

MediaPlayer.prototype.mute = function () {
    this.media.muted = true;
};

MediaPlayer.prototype.unmute = function () {
    this.media.unmuted = false;
};

MediaPlayer.prototype.toggleMuted = function () {
    if (this.media.muted) {
        this.media.muted = this.media.unmuted;
    } else {
        this.media.muted = !this.media.muted;
    }
    //NOTE: Solución Simple
    // this.media.muted = !this.media.muted;
};

export default MediaPlayer;
