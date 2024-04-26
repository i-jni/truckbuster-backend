import { Rdv } from "../models/config/db.js";


const rdvController = {

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
    
            // Récupérer les rdv existants pour le créneau horaire sélect
            const existingRdvs = await Rdv.find({
                startDate: rdvData.startDate 
            });
    

            const rdvLimit = 2;
    
            if (existingRdvs.length < rdvLimit) {
                const newRdv = new Rdv(rdvData);
                await newRdv.save();
                res.status(201).json(newRdv);
            } else {
                res.status(400).json({ error: 'Ce créneau horaire est complet. Sélectionner un autre créneau.' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Une erreur lors de la création du rdv' });
        }
    }


};

export default rdvController;