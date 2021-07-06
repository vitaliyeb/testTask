import Game from "../game";

interface SoundElement {
    id: string;
    audio: HTMLAudioElement
}

export default class Sound{
    private soundList: Array<SoundElement>;

    constructor(game: Game) {
        this.soundList = [];
    }

    addSound = (soundName: string, volume: number) => {

    }

}