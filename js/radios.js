const btnPlay = document.querySelector("div.play-btn img")
const URL = "https://ice55.securenetsystems.net/DASH14"
const player = document.createElement("audio")

const PlayRadio = ()=> {
    player.preload = true
    player.volume = "1.0"
    player.src = URL
    player.play()
}

function pausoAutoBloqueo() {
    try {
      wakeLock = navigator.wakeLock.request("screen");
      mensaje = "Se ha pausado el autobloqueo de pantalla."
      pausado = true
    } catch (err) {
        pausado = false
        mensaje = `Error: ${err.message}`
    } finally {
        console.log(mensaje)
    }
}

// function liberoAutoBloqueo() {
//     wakeLock = null;
//     mensaje = "Se activÃ³ el autobloqueo de pantalla."
//     lock.src = "images/unlocked.png"
//     estilos = "green darken-4 white-text"
//     pausado = false
//     setTimeout(() => {
//         //wakeLock.release();
//         location.reload()
//     }, 2100);
// }

btnPlay.addEventListener("click", PlayRadio)
player.addEventListener("playing", pausoAutoBloqueo)