import express from 'express'
const router = express.Router()

import Persona from '../models/persona'

// Agregar una persona

router.post('/persona-nueva', async (req, res) => {
    const body = req.body
    try {
        const personaDB = await Persona.create(body)
        res.status(200).json(personaDB)
    } catch (error) {
        res.status(500).json({
            mensaje: 'Ocurrió un erro',
            error
        })
    }
})

// Get con parámetros
router.get('/persona/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const personaDB = await Persona.findOne({ _id })
        res.json(personaDB)
    } catch (error) {
        res.status(400).json({
            mensaje: 'Ocurrió un error',
            error
        })
    }
})

//Get con todos los documentos
router.get('/personas', async (req, res) => {
    try {
        const personaDB = await Persona.find()
        res.json(personaDB)
    } catch (error) {
        res.status(400).json({
            mensaje: 'Ocurrió un error',
            error
        })
    }
})

// Delete, eliminar una documento
router.delete('/persona/:id', async (req, res) =>
{
    const _id = req.params.id
    try {
        const personaDB = await Persona.findByIdAndDelete({_id})
        if (!personaDB) {
            res.status(400).json({
                mensaje: 'No se encontró el id indicado',
                error
            })
        }
        res.json(personaDB)
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrió un error',
            error
        })
    }
})

// Put actualizar una nota
router.put('/persona/:id', async (req, res) => {
    const _id = req.params.id
    const body = req.body
    try {
        const personaDB = await Persona.findByIdAndUpdate(
            _id,
            body,
            {new: true})
            res.json(personaDB)
    } catch (error) {
        res.status(400).json({
            mensaje: 'Ocurrió un error',
            error
        })
    }
})

module.exports = router