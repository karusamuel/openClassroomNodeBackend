
 const Recipe = require("../models/Recipe")

exports.createRecipe = (req, res, next) => {
    console.log(JSON.stringify(req.body));
    console.log(req.body.ingredients);
    req.body.recipe = JSON.parse(JSON.stringify(req.body));
    const recipe = new Recipe({
        title:req.body.recipe.title,
        ingredients:req.body.recipe.ingredients,
        instructions:req.body.recipe.instructions,
        time:req.body.recipe.time,
        difficulty:req.body.recipe.difficulty
    });
    recipe.save().then(
        () => {
            res.status(201).json({
                message: 'Post saved successfully!'
            });
        }
    ).catch(
        (error) => {
            console.log(error.toString())
            res.status(400).json({
                error: error
            });
        }
    );
};

 exports.getAllRecipes = (req, res, next) => {
     Recipe.find().then(
         (things) => {
             res.status(200).json(things);
         }
     ).catch(
         (error) => {
             res.status(400).json({
                 error: error
             });
         }
     );
 };

 exports.getOneRecipe = (req, res, next) => {
     Recipe.findOne({
         _id: req.params.id
     }).then(
         (thing) => {
             res.status(200).json(thing);
         }
     ).catch(
         (error) => {
             res.status(404).json({
                 error: error
             });
         }
     );
 };

 exports.modifyRecipe = (req, res, next) => {
     let recipe1 = new Recipe({ _id: req.params._id });
     req.body.recipe = JSON.parse(JSON.stringify(req.body));
     const recipe = new Recipe({
         _id: req.params.id,
         title:req.body.recipe.title,
         ingredients:req.body.recipe.ingredient,
         instructions:req.body.recipe.instruction,
         time:req.body.recipe.time,
         difficulty:req.body.recipe.difficulty
     });
     Recipe.updateOne({_id: req.params.id}, recipe).then(
         () => {
             res.status(201).json({
                 message: 'Thing updated successfully!'
             });
         }
     ).catch(
         (error) => {
             console.log(error.toString())
             res.status(400).json({
                 error: error
             });
         }
     );
 };
 exports.deleteRecipe = (req, res, next) => {
     Recipe.findOne({_id: req.params.id}).then(
         (thing) => {
                 Recipe.deleteOne({_id: req.params.id}).then(
                     () => {
                         res.status(200).json({
                             message: 'Deleted!'
                         });
                     }
                 ).catch(
                     (error) => {
                         res.status(400).json({
                             error: error
                         });
                     }
                 );
             });
         }
 