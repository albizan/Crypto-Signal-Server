import Signal from '../models/signal.model';

export default {

  // Get all the cryptocurrency signals found in the mongo database
  getAllSignals: (req, res) => {
    Signal.find({})
      .then(foundData => res.status(201).json(foundData))
      .catch(err => res.status(500).json(err));
  },

  // Delete all the cryptocurrency signals found in the mongo database
  // If the operation is succesful, return the number of documents removed
  deleteAllSignals: (req, res) => {
    Signal.remove({})
      .then(obj => res.status(201).json(obj.n))
      .catch(err => res.status(500).json(err));
  },

  // Receive new signal object from frontend, insert it in the mongo collection
  // Signal object are validated in the frontend
  newSignal: (req, res) => {
    Signal.create(req.body)
      .then(savedData => res.status(201).json(savedData))
      .catch(err => res.status(500).json(err));
  },

  // Retreive a specific signal from the database, send it to frontend
  getSpecificSignal: (req, res) => {
    const signalID = req.params.id;
    Signal.findById(signalID)
      .then(retreivedSignal => res.status(201).json(retreivedSignal))
      .catch(err => res.status(504).json(err));
  },

  // Delete a specific signal, given its ID
  deleteSpecificSignal: (req, res) => {
    const signalID = req.params.id;
    Signal.findByIdAndRemove(signalID)
      .then(deletedSignal => res.status(201).json(deletedSignal))
      .catch(err => res.status(500).json(err));
  },

};
