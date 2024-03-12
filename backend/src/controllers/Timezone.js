const Timezone = require('../models/Timezone');
const Jours = require('../models/Jours');
const TimezoneJours = require('../models/Timezonejours');

const create_timezone_with_jours  = async (req, res, next) => {
    try {
        const { nom, heure_entree, heure_sortie, jours } = req.body;

        // Créez la Timezone
        const timezone = await Timezone.create({
            nom,
            heure_entree,
            heure_sortie,
        });

        // Vérifiez si 'jours' existe et qu'il a une longueur
        if (jours && jours.length > 0) {
            // Utilisez bulkCreate pour ajouter plusieurs jours en une seule requête
            const createdJours = await Jours.bulkCreate(jours, { returning: true });

            // Utilisez map pour créer un tableau d'objets à insérer dans Timezone_jours
            const timezoneJoursData = createdJours.map((jour) => {
                return {
                    id_timezone: timezone.id_timezone, // Set the id_timezone value
                    id_jours: jour.id_jours,
                };
            });

            // Utilisez bulkCreate pour ajouter plusieurs entrées dans Timezone_jours en une seule requête
            await TimezoneJours.bulkCreate(timezoneJoursData);

            res.status(201).json({ message: 'Création réussie' });
        } else {
            // Gérez le cas où 'jours' est vide ou non défini
            res.status(400).json({ message: 'La liste des jours est vide ou non définie' });
        }
    } catch (error) {
        console.log('Erreur lors de la création de la timezone :', error);
        res.status(500).json({ message: 'Erreur lors de la création de la timezone' });
    }
};


module.exports = { create_timezone_with_jours };
