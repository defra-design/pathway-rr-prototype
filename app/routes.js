const express = require('express')
const router = express.Router()


// Routes files for URLs/folders
router.use('/v1-1', require('./v1-1'))




module.exports = router
