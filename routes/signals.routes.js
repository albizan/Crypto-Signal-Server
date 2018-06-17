import express from 'express';
import signalController from '../controllers/signal.controller';

const signalRouter = express.Router();

signalRouter.route('/')
  .get(signalController.getAllSignals)
  .post(signalController.newSignal)
  .delete(signalController.deleteAllSignals);

signalRouter.route('/:id')
  .get(signalController.getSpecificSignal)
  .delete(signalController.deleteSpecificSignal)
  .put(signalController.updateSpecificSignal);

export default signalRouter;
