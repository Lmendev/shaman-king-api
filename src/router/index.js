const v1Characters = require('./v1/characters')
const v1Spirits    = require('./v1/spirits')

const router = {
    routes: {
        '/api/v1': [
            v1Characters,
            v1Spirits
        ]
    },

    init: function (app) {
        Object.entries(this.routes).forEach(([versionPath, routers]) => {
            routers.forEach(({ entity, router}) => {
                app.use(`${versionPath}/${entity}`, router)
            })
        })
    }
} 

module.exports = router