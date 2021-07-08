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

    loadImages = () => {
        const promises = [];

        [
            { name: 'menu:bg', ext: '.jpg'}
        ].forEach(({ name, ext }) => {
            const image = new Image();
            promises.push(new Promise((resolve) => {
                image.addEventListener('load', resolve);
            }))
            image.src = `/images/${name + ext}`;
            this.store[name] = image;
        })

        console.log(Promise.all(promises));
    }

    setBackground = (imageId: string) => {
        const {appHeight, appWidth, bgContext} = this.game;
        bgContext.drawImage(this.store[imageId], 0, 0, appWidth, appHeight);
    }
}