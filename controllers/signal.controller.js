import Signal from '../models/signal.model';

export default {
  getAllSignals: (req, res) => {
    Signal.find({})
      .then(foundData => res.status(201).json(foundData))
      .catch(err => res.status(500).json(err));
  },
  deleteAllSignals: (req, res) => {
    Signal.remove({})
      .then(obj => res.status(200).json(obj.n))
      .catch(err => res.status(500).json(err));
  },
  newSignal: (req, res) => {
    // Saving received data in the mongo database
    Signal.create(req.body)
      .then(savedData => res.status(201).json(savedData))
      .catch(err => res.status(500).json(err));
  },
};
