import express from 'express';
import gemController from '../controllers/scam.controller';

const scamRouter = express.Router();

scamRouter.route('/')
  .get(gemController.getAllScams)
  .post(gemController.newScam)
  .delete(gemController.deleteAllScams);

scamRouter.route('/:id')
  .get(gemController.getSpecificScam)
  .delete(gemController.deleteSpecificScam)
  .put(gemController.updateSpecificScam);

export default scamRouter;
