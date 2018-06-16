import express from 'express';
import signalController from '../controllers/signal.controller';

const signalRouter = express.Router();

signalRouter.route('/')
  .get(signalController.getAllSignals)
  .post(signalController.newSignal)
  .delete(signalController.deleteAllSignals);

export default signalRouter;
