const {Router} = require('express');
const { getAllTheater, addTheater, deleteTheater, getTheaterByCity, updateTheater } = require('../controller/ThaeterController');
const router = Router()

router.get('/',getAllTheater);
router.post('/save',addTheater);
router.delete('/delete',deleteTheater);
router.post('/city',getTheaterByCity)
router.put('/update',updateTheater)

module.exports=router;