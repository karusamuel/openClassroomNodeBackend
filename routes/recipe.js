const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/recipe');

router.post('/',stuffCtrl.createRecipe);
router.get('/',stuffCtrl.getAllRecipes);
router.get('/:id', stuffCtrl.getOneRecipe);
router.put('/:id',stuffCtrl.modifyRecipe);
router.delete('/:id', stuffCtrl.deleteRecipe);
module.exports = router;