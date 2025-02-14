const {Router} = require('express')
const contactController = require('./controller/ContactControler')
const router = Router()

router.get('/contacts',  contactController.index)

module.exports = router