import Game from "../game";

export default class Menu {
    game: Game;

    constructor(game: Game) {
        this.game = game;
    }

    init = () => {
        this.game.sound.addSound('intro.mp3', {
            volume: .5
        });
    }
}