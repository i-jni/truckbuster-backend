import { connectDB, saveRdv } from "../config/db.js";


const db_modele = async () => {
    try {
        await connectDB();
        const firstRdv = {
            date: "30-04-24",
            heure_debut: "07:00",
            heure_fin: "09:00",
            entreprise: {
                nom: "Abc",
                email_entreprise: "def@mail.fr",
                chauffeur: "abc",
                camion_immatricule: "dddd",
                modele: 'a1',
                marque: 'audi'
            },
            email_tbuster: "abc@mail.fr",
            pont: {
                nom: "abd",
                dispo: true,
                heure_debut: "07:00",
                heure_fin: "17:00"
            }
        };
        await saveRdv(firstRdv);
    } catch (error) {
        console.error("Error:", error);
    }
};

db_modele();

export default db_modele;
