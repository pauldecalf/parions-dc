import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcrypt';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const {nom, prenom, email, password } = req.body; // Là on récupére les données POST
        const role = 0; // Là on fixe le role à 0 pour user et à 1 pour admin
        const balance = 0; // Là c'est le solde sur le compte utilisateur qui est à 0

        try {
            const client = await clientPromise;
            const db = client.db(process.env.MONGODB_DATABASE); // Remplacez par le nom de votre base
            const collection = db.collection('users'); // Remplacez par le nom de votre collection d'utilisateurs

            // Vérifier si l'utilisateur existe déjà
            const existingUser = await collection.findOne({ email });
            if (existingUser) {
                return res.status(409).json({ message: 'Cet email est déjà utilisé' });
            }

            // Hacher le mot de passe
            const hashedPassword = await bcrypt.hash(password, 10);

            // Enregistrer le nouvel utilisateur
            const newUser = {
                nom,
                prenom,
                email,
                role,
                balance,
                password: hashedPassword,
                createdAt: new Date(),
            };

            await collection.insertOne(newUser);

            return res.status(201).json({ message: 'Inscription réussie', user: newUser });
        } catch (error) {
            console.error('Erreur lors de l\'inscription:', error);
            return res.status(500).json({ message: 'Erreur serveur, veuillez réessayer plus tard' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Méthode ${req.method} non autorisée`);
    }
}
