const MongoLib = require('../lib/mongo')

class CharactersService {
    constructor(){
        this.collection = 'characters'
        this.mongoDb = new MongoLib()
    }

    async getCharacters({ tags }){
        const query = tags && { tags: { $in: tags } }
        const characters = await this.mongoDb.getAll(this.collection, query)
        return characters || []
    }

    async getCharacter({ characterId }){
        const character = await this.mongoDb.get(this.collection, characterId)
        return character || {}
    }
}

module.exports = CharactersService