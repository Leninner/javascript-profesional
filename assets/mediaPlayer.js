// Función constructora
class MediaPlayer {
    constructor(config) {
        // Recibe un objeto y accede a la data de la llave (el); también podemos cambiar la manera de acceder a la data de config, se puede cambiar (el).
        this.media = config.el;
        this.plugins = config.plugins || [];
        this._initPlugins();
    }
    // Métodos añadidos al prototype
    // No se puede utilizar funciones de flecha en métodos de las funciones.
    _initPlugins() {
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted;
            },
            set muted(value) {
                this.media.muted = value;
            },
        };

        this.plugins.forEach((plugin) => {
            plugin.run(player);
        });
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    //Toggle (alternar) sirve para alternar los movimientos
    togglePlay() {
        if (this.media.paused) {
            //.paused sirve para comprobar si el video está pausado o no
            this.play();
        } else {
            this.pause();
        }
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.unmuted = false;
    }
    toggleMuted() {
        if (this.media.muted) {
            this.media.muted = this.media.unmuted;
        } else {
            this.media.muted = !this.media.muted;
        }
        //NOTE: Solución Simple
        // this.media.muted = !this.media.muted;
    }
}

export default MediaPlayer;
