const express = require("express");
const router = express.Router();
const authCon = require('../controller/authControllers/index')



router.get('/get_all_post',authCon.authGetAllpost)

router.post('/create_post',authCon.authCreatepost)

router.delete('/postdelete/:id',authCon.authdeletepost)

router.put('/update/:id',authCon.authupdatepost)




module.exports = router