import { GameConsole } from "../models/game-console";

export const CONSOLES: GameConsole[] = [

    {
        id: 1,
        name: 'Switch',
        manufacturer: 'Nintendo',
        price: 300.00,
        releaseDate: new Date(2017, 2, 3),
        images: [
            'https://m.media-amazon.com/images/I/51sns04gRUL._AC_SX342_SY445_QL70_ML2_.jpg',
            'https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_300/ncom/en_US/switch/system/three-modes-in-one'
        ]
    }, {
        id: 2,
        name: 'Switch 2',
        manufacturer: 'Nintendo',
        price: 500.00,
        releaseDate: new Date(2025, 5, 5),
        images: [
            'https://m.media-amazon.com/images/I/714-Fh3ngmL._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/714-Fh3ngmL.jpg'
        ]
    }, {
        id: 3,
        name: 'Playstation 5',
        manufacturer: 'Sony',
        price: 500.00,
        releaseDate: new Date(2020, 10, 12),
        images: [
            'https://m.media-amazon.com/images/I/51fM0CKG+HL._AC_SX342_SY445_QL70_ML2_.jpg',
            'https://m.media-amazon.com/images/I/619BkvKW35L._UF1000,1000_QL80_.jpg'
        ]
    }, {
        id: 4,
        name: 'Xbox Series X',
        manufacturer: 'Microsoft',
        price: 500.00,
        releaseDate: new Date(2020, 10, 10),
        images: [
            'https://m.media-amazon.com/images/I/61s248JDH+L._AC_SX679_.jpg',
            'https://m.media-amazon.com/images/I/31IdDeNnUEL._AC_SX679_.jpg'
        ]
    }
];
