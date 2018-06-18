import Gem from '../models/gem.model';

export default {

  // Get all the 'GEMS' found in the mongo database
  getAllGems: (req, res) => {
    Gem.find({})
      .then(foundData => res.status(201).json(foundData))
      .catch(err => res.status(500).json(err));
  },

  // Delete all the 'GEMS found in the mongo database
  // If the operation is succesful, return the number of documents removed
  deleteAllGems: (req, res) => {
    Gem.remove({})
      .then(obj => res.status(201).json(obj.n))
      .catch(err => res.status(500).json(err));
  },

  // Receive new Gem object from frontend, insert it in the mongo Gem Collection
  // Gem objects are validated in the frontend
  newGem: (req, res) => {
    Gem.create(req.body)
      .then(savedData => res.status(201).json(savedData))
      .catch(err => res.status(500).json(err));
  },

};
