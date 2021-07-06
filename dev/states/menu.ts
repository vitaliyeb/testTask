import Game from "../game";

export default class Menu {
    game: Game;

    constructor(game: Game) {

    }

    init = () => {
        this.game.sound.addSound('intro.mp3', 1);
    }
}