const Primus = require('primus');

let go = (server) => {
   let primus = new Primus(server, {/* options */})
}

module.exports.go = go;