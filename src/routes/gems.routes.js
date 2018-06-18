import express from 'express';
import gemController from '../controllers/gem.controller';

const gemRouter = express.Router();

gemRouter.route('/')
  .get(gemController.getAllGems)
  .post(gemController.newGem)
  .delete(gemController.deleteAllGems);

gemRouter.route('/:id')
  .get(gemController.getSpecificGem)
  .delete(gemController.deleteSpecificGem)
  .put(gemController.updateSpecificGem);

export default gemRouter;
