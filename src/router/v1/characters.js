const express = require('express')
const CharactersService = require('../../services/characters.js')

const entity = 'characters'
const router = express.Router()

router.get('/', async function(req, res, next){
    console.log('test')
    res.status(200).json({
        data: 'characters'
    })
    /*
    const { tags } = req.query

    try {
        const characters = await new CharactersService().getCharacters({ tags })

        res.status(200).json({
            data: characters
        })
    } catch (error) {
        next(error)
    }*/
})
/*
router.get('/characters/:characterId', async function(req, res, next){
    const { characterId } = req.params

    try {
        const characters = await haractersService.getCharacter({ characterId })

        res.status(200).json({
            data: characters
        })
    } catch (error) {
        next(error)
    }
})

router.get('/', async function(req, res, next){
    console.log('health')
    res.status(200)
})
*/

module.exports = { entity, router }