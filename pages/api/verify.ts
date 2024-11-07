// Vérification de token

import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { token } = req.body;

        try {
            // Vérifier que JWT_SECRET est défini et de type string
            const secret = process.env.JWT_SECRET;
            if (!secret) {
                throw new Error("La variable d'environnement JWT_SECRET n'est pas définie.");
            }
            const decoded = jwt.verify(token, secret);
            return res.status(200).json({ message: 'Token valide', user: decoded });
        } catch (error) {
            console.error('Erreur de vérification:', error);
            return res.status(401).json({ message: 'Token invalide' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Méthode ${req.method} non autorisée`);
    }
}
