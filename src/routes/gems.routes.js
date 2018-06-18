import express from 'express';
import gemController from '../controllers/gem.controller';

const gemRouter = express.Router();

gemRouter.route('/')
  .get(gemController.getAllGems)
  .post(gemController.newGem)
  .delete(gemController.deleteAllGems);

export default gemRouter;
