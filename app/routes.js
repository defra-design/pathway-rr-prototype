const express = require('express')
const router = express.Router()


// Routes files for URLs/folders
router.use('/v1-1', require('./v1-1'))

router.use('/v1-2', require('./v1-2'))




module.exports = router
