import { Game } from "./src/Game.js";


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


function main() {
    const game = new Game(ctx);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    game.gameLoop();
    game.renderLoop(0);
}

main();