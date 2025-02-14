const {Router} = require('express')
const contactController = require('./controller/contactcontroler')
const router = Router()

router.get('/contacts',  contactController.index)

module.exports = router