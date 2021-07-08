import Game from "../game";

interface StoreInterface {
    [name: string]: HTMLImageElement;
}

export default class ImageStore {
    game: Game;
    store: StoreInterface;

    constructor(game: Game) {
        this.game = game;
        this.store = {};
    }

    imageLoader = () => {

    }

    setBackground = (imageId: string) => {
        const {appHeight, appWidth, bgContext} = this.game;
        bgContext.drawImage(this.store[imageId], 0, 0, appWidth, appHeight);
    }
}