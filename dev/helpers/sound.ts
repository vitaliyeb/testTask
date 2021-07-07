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

    addSound = (soundName: string, option): string => {
        const audio = new Audio(`sounds/${soundName}`);
        const id = [Math.random(),Math.random(),Math.random()].map((n) => String(n).slice(-4)).join('');

        for (let key of Object.keys(option)) {
            audio[key] = option[key];
        }

        audio.play();

        this.soundList.push({
            id,
            audio
        });

        return id;
    }

}