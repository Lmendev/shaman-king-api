const express = require('express')
const { config } = require('../config')
const Router = require('../router')

class Server {
    constructor() {
        this.port = config.port || 3000
        this.app = express()
        this.router = new Router(this.app)

        this.router.init()
    }

    listen = () => {
        this.app.listen(this.port, () => {
            console.log(`Listening on http://localhost:${config.port}`)
        });
    }
}

module.exports = Server