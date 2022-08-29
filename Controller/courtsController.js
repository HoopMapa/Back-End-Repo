const Courts = require('../models/courtsModels')

const getAllCourts = async (req,res) => {
    try{
        const data = await Courts.getAllCourtsFromDB()
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
}

const getSingleCourt = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        const data = await Courts.getSingleCourtFromDB(id)
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
}

const createCourt = async (req, res) => {

    const {
        court_name,
        court_level,
    } = req.body

    const newCourtInfo = {
        court_name,
        court_level,
    }
    console.log(req.body)
    if (!newCourtInfo) {
        return res.status(404).json({
            message: 'NO DATA IS BEING PROVIDED'
        })
    }

    try {
        const data = await Courts.createCourtFromDB(newCourtInfo)
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })

    }
}
const updateCourt = async(req,res) => {
    const court_id = req.params.id;
    const { court_body } = req.body
    console.log(court_body,court_id)
    try {
        const data = await Courts.updateCourtFromDB(court_id, court_body)
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })

    }

    
}

const deleteCourt = async (req, res) => {
    const court_id = req.params.id;
    if (!court_id) {
        return res.status(404).json({
            message: "NO DATA PROVIDED",
        });
    }
    try {
        const data = await Courts.deleteCourtFromDB(court_id);
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
}

module.exports = {
    getAllCourts,
    getSingleCourt,
    createCourt,
    updateCourt,
    deleteCourt
}