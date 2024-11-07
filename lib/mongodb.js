// lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Assurez-vous d'avoir configuré MONGODB_URI dans votre .env
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
    throw new Error("Veuillez définir 'MONGODB_URI' dans votre fichier .env local.");
}

if (process.env.NODE_ENV === 'development') {
    // Utiliser une connexion unique en développement pour éviter les reconnections répétitives
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // En production, toujours créer une nouvelle connexion
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;
