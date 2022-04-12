const express = require('express')
const utilController = require('../controllers/util')

const router = express.Router()

router.get('/fibo/:n', utilController.fibbo)

module.exports = router
