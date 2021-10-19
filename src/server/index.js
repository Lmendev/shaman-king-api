const express = require('express')
const { config } = require('../config')
const router = require('../router')

class Server {
    constructor() {
        this.port = config.port || 3000
        this.app = express()
        
        router.init(this.app)
    }

    listen = () => {
        this.app.listen(this.port, () => {
            console.log(`Listening on http://localhost:${config.port}`)
        });
    }
}

module.exports = Server