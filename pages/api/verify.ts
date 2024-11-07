// Vérification de token

import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { token } = req.body;

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
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
