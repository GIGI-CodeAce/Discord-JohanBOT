function GetImg(root){
    return `https://raw.githubusercontent.com/GIGIsOtherStuff/MonsterAgifs/main/gifs/${root}.gif`
}

const MonsterGifs = [
    {
        id: 1,
        gif: GetImg('monster1'),
    },
    {
        id: 2,
        gif: GetImg('monster2'),
    },
    {
        id: 3,
        gif: GetImg('monster3'),
    },
    {
        id: 4,
        gif: GetImg('monster4'),
    },
    {
        id: 5,
        gif: GetImg('monster5'),
    },
    {
        id: 6,
        gif: GetImg('monster6'),
    },
    {
        id: 7,
        gif: GetImg('monster7'),
    },
    {
        id: 8,
        gif: GetImg('monster8'),
    },
    {
        id: 9,
        gif: GetImg('monster9'),
    },
    {
        id: 10,
        gif: GetImg('monster10'),
    },
    {
        id: 11,
        gif: GetImg('monster11'),
    },
    {
        id: 12,
        gif: GetImg('monster12'),
    },
]

export default MonsterGifs;