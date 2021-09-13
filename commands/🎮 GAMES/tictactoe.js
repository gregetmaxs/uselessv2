module.exports = {
    name: 'tictactoe',
    aliases: ['ttt'],
    categories : 'games',
    description: 'Sends a ttt game to be played',
    usage:"",
    timeout:"10000",
    execute: async(client, message, args) =>{
        const simplydjs = require("simply-djs")
        simplydjs.tictactoe(message)
    }
}