const locationsSchema = require('../models/location.model');

const locationController = {
    getLocations: async (req, res) => {
        try {
            const locations = await locationsSchema.find();
            res.status(200).json(locations);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    createLocations: async (req, res) => {
        try {
            const location = new locationsSchema(req.body);
            const saveLocation = await location.save();
            res.status(200).json(saveLocation);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    deleteLocations: async (req, res) => {
        try {
            const removeLocation = await locationsSchema.deleteMany({}); // Deletes all documents in the collection
            res.status(200).json({ message: 'All locations deleted successfully', deletedCount: removeLocation.deletedCount });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = locationController;
