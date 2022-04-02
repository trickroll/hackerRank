class Player {
    constructor () {
        this.songQueue =[]
        this.currentSong = null
    }

    shuffle() {
        this.songQueue.sort(() => Math.random < 0.5 ? 1 :-1)
    }

    play() {
        if (this.currentSong === null) {
            this.currentSong = this.songQueue.unshift()
            this.currentSong.play()
        }
        else {
            console.log('Song currently playing')
        }
    }

    pause() {
        if (this.currentSong === null){
            this.currentSong.pause()
        }
        else {
            console.log("no song playing!")
        }
    }
    nextSong() {
        this.currentSong = this.songQueue.unshift()
        this.currentSong.play()
    }
    addSong(song) {
        this.songQueue.push(song)
    }
    currentSongName() {
        return this.currentSong.name
    }

}

class Song {
    constructor(name, trackFile) {
        this.name = name
        this.track = new Audio(trackFile)
    }

    play() {
        this.track.play()
    }

    pause() {
        this.track.play()
    }
}