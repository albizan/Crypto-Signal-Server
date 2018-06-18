import Scam from '../models/scam.model';

export default {

  // Get all the 'SCAMS' found in the mongo database
  getAllScams: (req, res) => {
    Scam.find({})
      .then(foundData => res.status(201).json(foundData))
      .catch(err => res.status(500).json(err));
  },

  // Delete all the 'SCAMS found in the mongo database
  // If the operation is succesful, return the number of documents removed
  deleteAllScams: (req, res) => {
    Scam.remove({})
      .then(obj => res.status(201).json(obj.n))
      .catch(err => res.status(500).json(err));
  },

  // Receive new Scam object from frontend, insert it in the mongo Scam Collection
  // Scam objects are validated in the frontend
  newScam: (req, res) => {
    Scam.create(req.body)
      .then(savedData => res.status(201).json(savedData))
      .catch(err => res.status(500).json(err));
  },

  // Retreive a specific Scam project from the database, send it to frontend
  getSpecificScam: (req, res) => {
    const scamID = req.params.id;
    Scam.findById(scamID)
      .then(retreivedScam => res.status(201).json(retreivedScam))
      .catch(err => res.status(504).json(err));
  },

  // Delete a specific Scam project, given its ID
  deleteSpecificScam: (req, res) => {
    const scamID = req.params.id;
    Scam.findByIdAndRemove(scamID)
      .then(deletedScam => res.status(201).json(deletedScam))
      .catch(err => res.status(500).json(err));
  },

  // Update a specific Scam project, give its ID and a payload
  updateSpecificScam: (req, res) => {
    const scamID = req.params.id;
    Scam.findByIdAndUpdate(scamID, req.body, { new: true }) // {new:true} -> updated scam in .then
      .then(updatedScam => res.status(201).json(updatedScam))
      .catch(err => res.status(500).json(err));
  },

};
