const express = require('express');
const {fetchdata,getdata} = require('./controller');


const router = express.Router()

router.route('/post').post(fetchdata)
router.route('/get').get(getdata)




module.exports = router;