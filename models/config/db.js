import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config()
// Connexion à la bdd

const connectDB = async () => {
const uri= process.env.MONGO_URL

    try {
        await mongoose.connect(uri);
        console.log("Connected ");
    } catch (error) {
        console.error("Failed to connect ", error);
        throw error;
    }
};

//les schémas
const entrepriseSchema = new mongoose.Schema({
    nom: {
        type: String,
        unique: true,
        required: true,
    },
    email_entreprise: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email address format',
        },
    },
    chauffeur: {
        type: String,
        required: true,
    },
    camion_immatricule: {
        type: String,
        required: true,
    },
    modele: {
        type: String,
        required: true,
    },
    marque: {
        type: String,
        required: true,
    },
});

const pontSchema = new mongoose.Schema({
  nom: {
    type: String,
    // required: true
  },
  // creneaux: [{
  //   debut: {
  //     type: Date,
  //     // required: true
  //   },
  //   fin: {
  //     type: Date,
  //     // required: true
  //   },
  //   disponible: { type: Boolean, default: true },
  // }],
});

const rdvSchema = new mongoose.Schema({
    startDate: {
      type: Date,
      // required: true,
    },
    endDate: {
      type: Date,
      // required: true,
    },
    entreprise: entrepriseSchema,
    email_tbuster: {
      type: String,
      // required: true,
      validate: {
        validator: function (value) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: 'Invalid email address format',
      },
    },
    pont: pontSchema
  });

// Créer le modèle
const Rdv = mongoose.model('rdv', rdvSchema);

 
// sauvegarder 
const saveRdv = async (rdvData) => {
    try {
        const rdv = new Rdv(rdvData);
        await rdv.save();
        console.log("Rdv saved successfully:", rdv);
        return rdv;
    } catch (error) {
        console.error("Failed to save Rdv:", error);
        throw error;
    }
};

export { connectDB, saveRdv, Rdv };
