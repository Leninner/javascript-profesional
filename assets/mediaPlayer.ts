// Función constructora
class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;

    constructor(config) {
        // Recibe un objeto y accede a la data de la llave (el); también podemos cambiar la manera de acceder a la data de config, se puede cambiar (el).
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlugins();
    }
    // Métodos añadidos al prototype
    // No se puede utilizar funciones de flecha en métodos de las funciones.
    private initPlugins() {
        this.plugins.forEach((plugin) => {
            plugin.run(this);
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
        this.media.muted = false;
    }

    toggleMuted() {
        if (this.media.muted) {
            this.unmute();
        } else {
            this.mute();
        }
        //NOTE: Solución Simple
        // this.media.muted = !this.media.muted;
    }
}

export default MediaPlayer;
