import { connectDB, saveRdv } from "../config/db.js";


const db_modele = async () => {
    try {
        await connectDB();
        const firstRdv = {
            startDate: "2023-04-18T07:00:00.000Z",
            endDate: "2023-04-18T09:00:00.000Z",
            entreprise: {
              nom: "Entreprise ABC",
              email_entreprise: "contact@entrepriseabc.com",
              chauffeur: "John Doe",
              camion_immatricule: "AB-123-CD",
              modele: "Modèle X",
              marque: "Marque Y"
            },
            email_tbuster: "tbuster@exemple.com",
            pont: {
              nom: "Pont1",
              // creneaux: [
              //   {
              //     debut: "2023-04-18T07:00:00.000Z",
              //     fin: "2023-04-18T09:00:00.000Z",
              //     disponible: true,
              //   }
              // ]
            }
          }
        await saveRdv(firstRdv);
    } catch (error) {
        console.error("Error:", error);
    }
};

db_modele();

export default db_modele;
