const express = require('express')
const router = express.Router()
const updateUser = require('./app')
const deleteUser = requires('./app')

router.put('/users/:id', async (req, res) => {
    const { id } = req.params
    const { name, email } = req.body

    // update logic will go here
    try {
        const updateUser = await updateUser(id, name, email)
        res.json(updateUser)
    } catch(err) {
        res.status(400).send(err.message)
    }

    res.send('User updated')
})

router.delete('/users/:id', async (req, res) => {
    const { id } = req.params

    try {
        const deletedUser = await deleteUser(id)
        if (deletedUser) {
            res.json(deletedUser)
        } else {
            res.status(404).send('User not found')
        }
    } catch(err) {
        res.status(500).send(err.message)
    }
    // Delete logic weill go here

    res.send('User deleted')
})

module.exports = router