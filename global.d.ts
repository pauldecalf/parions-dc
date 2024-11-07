// global.d.ts
import { MongoClient } from 'mongodb';

declare global {
    // Ajoute `_mongoClientPromise` comme propriété de `globalThis`
    var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export {}; // Assure que le fichier est traité comme un module
