import { Rdv } from "../models/config/db.js";


const rdvController = {
    //  tt les rdvs
    findAll: async (req, res) => {
        try {
            const rdvs = await Rdv.find();
            res.status(200).json(rdvs);
        } catch (error) {
            res.status(500).json({ error: 'Une erreur lors de la récupération des rdv' });
        }
    },


    findById: async (req, res) => {
        try {
            const rdv = await Rdv.findById(req.params.id);
            res.status(200).json(rdv);
        } catch (error) {
            res.status(500).json({ error: 'Une erreur lors de la récupération du rdv' });
        }
    },

    // creation rdv:
    create: async (req, res) => {
        try {
            const rdvData = req.body;
            const newRdv = new Rdv(rdvData);
            await newRdv.save();
            res.status(201).json(newRdv);
        } catch (error) {
            res.status(500).json({ error: 'Une erreur lors de la création du rdv' });
        }
    }
};

export default rdvController;