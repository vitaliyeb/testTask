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

    addSound = (soundName: string, option) => {
        const audio = new Audio(`sounds/${soundName}`);
        const id = '';

        for (let [key, value] of Object.entries(option)) {
            audio[key] = value;
        }

        audio.play();

        this.soundList.push({
            id,
            audio
        });

        return id;
    }

}