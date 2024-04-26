// import { Rdv } from "../models/config/db.js";

// const checkAvailability = async (startDate, endDate) => {
//     try {
//         // Récupérer les rendez-vous qui se chevauchent avec le créneau horaire sélectionné
//         const existingRdvs = await Rdv.find({
//             $or: [
//                 { startDate: { $lt: endDate }, endDate: { $gt: startDate } }, 
//                 { startDate: { $eq: startDate }, endDate: { $eq: endDate } } 
//             ]
//         });

//         // Si aucun rendez-vous n'est trouvé, le créneau horaire est disponible
//         return existingRdvs.length === 0;
//     } catch (error) {
//         console.error('Erreur lors de la vérification de la disponibilité :', error);
//         return false;
//     }
// };

// export default checkAvailability;