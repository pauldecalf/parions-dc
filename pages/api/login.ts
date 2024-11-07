import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        try {
            const client = await clientPromise;
            const db = client.db(process.env.MONGODB_DATABASE);
            const collection = db.collection('users');

            const user = await collection.findOne({ email });

            if (user) {
                const passwordMatch = await bcrypt.compare(password, user.password);

                if (passwordMatch) {
                    const token = jwt.sign(
                        { userId: user._id, email: user.email },
                        process.env.JWT_SECRET,
                        { expiresIn: '1h' }
                    );

                    return res.status(200).json({ message: 'Connexion réussie', token });
                } else {
                    return res.status(401).json({ message: 'Mot de passe incorrect' });
                }
            } else {
                return res.status(404).json({ message: "L'utilisateur n'existe pas" });
            }
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
            return res.status(500).json({ message: 'Erreur serveur, veuillez réessayer plus tard' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Méthode ${req.method} non autorisée`);
    }
}
