const { MongoClient, ObjectId } = require('mongodb')
const { config } = require('../config')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = config.dbName

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`

class MongoLib {
    constructor(){
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true })
        this.dbName = DB_NAME
    }

    connect() {
        if(!MongoLib.connection){
            MongoLib.connection = new Promise((resolve, reject) => {
                this.client.connect(err => {
                    if(err) {
                        reject(err)
                    }

                    console.log('Connected successfully to mongo')
                    resolve(this.client.db(this.dbName))
                })

                this.client.connect()
            })
        }

        return MongoLib.connection
    }

    getAll(collection, query){
        return this.connect().then(db => db.collection(collection).find(query).toArray())
    }

    get(collection, id){
        return this.connect().then(db => db.collection(collection).findOne({ _id: ObjectId(id) }))
    }
}

module.exports = MongoLib