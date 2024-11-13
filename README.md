
# Parions-DC

## Description
**Parions-DC** est une plateforme innovante de paris en ligne développée avec **Next.js**. Ce projet permet aux utilisateurs de parier sur divers événements, que ce soit des événements sportifs, des prévisions météo, ou encore des paris plus créatifs et amusants, comme la ponctualité des étudiants en classe.

L'objectif est de proposer une expérience de divertissement unique où les utilisateurs peuvent placer des paris sur des sujets du quotidien, favorisant ainsi l'interaction et la compétition amicale entre amis ou collègues.

## Fonctionnalités
- Interface utilisateur moderne et réactive développée avec **Next.js**.
- **Header dynamique** avec un système d'authentification.
- **Connexion** sécurisée avec **MongoDB** pour la gestion des comptes utilisateurs.
- Possibilité de **parier** sur des événements variés avec une interface intuitive.
- Suivi en temps réel des **statistiques** et des résultats des paris.
- **Historique des paris** pour chaque utilisateur.
- **Gestion de profils** utilisateurs avec la possibilité de voir ses gains/pertes.

## Prérequis
- **Node.js** v18.x ou supérieur
- **npm** ou **yarn**
- **MongoDB** pour la base de données

## Installation et utilisation

### 1. Cloner le dépôt
```bash
git clone https://github.com/pauldecalf/parions-dc.git
cd parions-dc
```

### 2. Installer les dépendances
```bash
npm install
# ou avec yarn
yarn install
```

### 3. Configurer les variables d'environnement
Créez un fichier `.env.local` à la racine du projet avec les informations suivantes :
```
NEXT_PUBLIC_API_URL=https://parions.dc.pauldecalf.fr/api
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/parionsdc?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
```

### 4. Lancer l'application en mode développement
```bash
npm run dev
# ou avec yarn
yarn dev
```
Accédez à l'application via `http://localhost:3000`.

### 5. Générer une build de production
```bash
npm run build
npm run start
```

## Technologies utilisées
- **Next.js** pour le frontend
- **MongoDB** pour la base de données
- **Mongoose** pour la gestion des modèles
- **JWT** pour l'authentification
- **React Context API** pour la gestion de l'état
- **Tailwind CSS** pour le design

## Structure du projet
```
├── components
│   ├── Header.js
│   ├── AuthForm.js
├── pages
│   ├── index.js
│   ├── login.js
│   ├── register.js
│   ├── api
│       ├── auth
│           ├── login.js
│           ├── register.js
│           ├── logout.js
├── public
├── styles
├── utils
├── .env.local
└── README.md
```

## Contribuer
Les contributions sont les bienvenues ! Si vous souhaitez ajouter des fonctionnalités ou améliorer le code existant, n'hésitez pas à créer une pull request.

1. Fork le projet
2. Créez une branche (`git checkout -b feature/ajout-fonctionnalité`)
3. Committez vos modifications (`git commit -m 'Ajouter une nouvelle fonctionnalité'`)
4. Poussez sur la branche (`git push origin feature/ajout-fonctionnalité`)
5. Ouvrez une pull request
