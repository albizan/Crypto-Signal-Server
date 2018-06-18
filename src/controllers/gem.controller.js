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

  // Retreive a specific Gem from the database, send it to frontend
  getSpecificGem: (req, res) => {
    const gemID = req.params.id;
    Gem.findById(gemID)
      .then(retreivedGem => res.status(201).json(retreivedGem))
      .catch(err => res.status(504).json(err));
  },

  // Delete a specific Gem, given its ID
  deleteSpecificGem: (req, res) => {
    const gemID = req.params.id;
    Gem.findByIdAndRemove(gemID)
      .then(deletedGem => res.status(201).json(deletedGem))
      .catch(err => res.status(500).json(err));
  },

  // Update a specific Gem, give its ID and a payload
  updateSpecificGem: (req, res) => {
    const gemID = req.params.id;
    Gem.findByIdAndUpdate(gemID, req.body, { new: true }) // {new:true} -> updated gem in .then
      .then(updatedGem => res.status(201).json(updatedGem))
      .catch(err => res.status(500).json(err));
  },

};
