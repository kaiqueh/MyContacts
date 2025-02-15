const {Router} = require('express')
const contactController = require('./controller/contactcontroler')
const router = Router()

router.get('/contacts',  contactController.index)
router.get('/contacts/:id',  contactController.show)
router.delete('/contacts/:id',  contactController.delete)

module.exports = router