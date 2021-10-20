const v1Characters = require('./v1/characters')
const v1Spirits    = require('./v1/spirits')

class Router {
    constructor(app){
        this.routes = {
            '/api/v1': [
                v1Characters,
                v1Spirits
            ]
        }

        this.app = app
    }
    
    init = () => {
        Object.entries(this.routes).forEach(([versionPath, routers]) => {
            routers.forEach(({ entity, router}) => {
                this.app.use(`${versionPath}/${entity}`, router)
            })
        })
    }
} 

module.exports = Router