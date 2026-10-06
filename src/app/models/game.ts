export class Game {
    id?: number;
    consoleId?: number;
    name?: string;
    cover?: string;
    publisher?: string;
    price?: number;
}


// game-console.ts

export class GameConsole {
    id?: number;
    name?: string;
    manufacturer?: string;
    price?: number;
    releaseDate?: Date;
    images?: string[];
}