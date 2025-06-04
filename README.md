# Projet #14 - HRNet

Ce dépôt contient la nouvelle version de l'application HRNet convertie de jQuery vers React.

## 🎯 Objectifs
* Convertir l'ensemble de l'application HRNet de jQuery vers React
* Créer et publier un composant React réutilisable sur npm à partir d'un plugin jQuery
* Remplacer les plugins jQuery restants par des alternatives React
* Comparer les performances entre l'ancienne et la nouvelle version de l'application

## 🛠️ Technologies utilisées
* **React** (Hooks, Context API)
* **JavaScript** (ES6+)
* **Styled Components** pour les styles du composant Modal
* **React Router** pour la navigation
* **LocalStorage** pour la persistance des données
* **Jest** et **React Testing Library** pour les tests
* **Lighthouse** pour les tests de performance

## 📁 Structure du projet

```
hrnet/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   │   ├── CreateEmployee/
│   │   ├── EmployeeList/
│   │   └── Home/
│   ├── utils/
│   ├── data/
│   ├── App.js
│   └── index.js
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
├── .gitignore
├── package.json
└── README.md
```

## ▶️ Lancer le projet en local

### 1. Prérequis

Vérifiez que vous disposez des bonnes versions:

```bash
# Vérifier la version de Node.js
node --version
```

### 2. Configurer le projet

```bash
# Forkez ce dépôt
# Clonez le dépôt sur votre ordinateur
# Ouvrez une fenêtre de terminal dans le projet cloné

# Installer les dépendances
npm install
```

### 3. Lancer l'application

```bash
# Démarrer le frontend (React)
npm run dev
```

Votre application frontend sera accessible à l'adresse : `http://localhost:5173`


> **Note :** Le backend est optionnel pour le fonctionnement de base car l'application utilise actuellement le localStorage pour la persistance des données. L'utilisation du backend permet de stocker les données de manière plus pérenne dans une base de données.

## 📋 Fonctionnalités principales

### Création d'employé
Formulaire permettant d'ajouter un nouvel employé avec validation des champs:
* Prénom et nom
* Date de naissance
* Date de début
* Département
* Adresse complète

### Liste des employés
Tableau des employés avec les fonctionnalités suivantes:
* Affichage de tous les employés enregistrés
* Tri par colonnes
* Filtrage et recherche
* Pagination
* Sélection du nombre d'entrées par page

### Composants convertis
* **Modal** - Fenêtre modale de confirmation (composant npm publié)
  * Convertie depuis le plugin jQuery Modal (https://github.com/kylefox/jquery-modal)
  * Animations fluides et personnalisables
  * Accessible et responsive
* **DatePicker** - Sélecteur de date
* **Dropdown** - Menu déroulant personnalisé
* **DataTable** - Tableau de données avec fonctionnalités avancées

## 📊 Rapport de performance
Une analyse comparative des performances a été réalisée entre la version jQuery originale et cette nouvelle version React. Les résultats montrent:
* Temps de chargement réduit de X%
* Score Lighthouse amélioré
* Meilleure expérience utilisateur

## 📦 Composant npm publié

Le composant `Modal-component` a été publié sur npm et peut être installé avec:

```bash
npm install kurts350-modal-component
# ou
yarn add kurts350-modal-component
```

### Caractéristiques du composant Modal

* 🚀 Performances optimisées par rapport à la version jQuery
* 🎨 Animations fluides d'ouverture et fermeture
* 🔄 Transitions personnalisables
* 📱 Responsive design avec largeur maximale configurable
* ♿ Accessible (gestion du focus, navigation au clavier, attributs ARIA)
* 🧩 Utilisation de styled-components pour un style encapsulé

### Exemple d'utilisation

```jsx
import React, { useState } from 'react';
import Modal from 'kurts350-modal-component';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Ouvrir la modal</button>
      
      <Modal 
        isOpen={isOpen} 
        onClose={closeModal}
        title="Employé créé avec succès !"
        closeText="Fermer"
        maxWidth={500}
        fadeDuration={400}
      >
        <p>Le nouvel employé a été ajouté à la base de données.</p>
      </Modal>
    </div>
  );
}
```

### Props disponibles

| Prop | Type | Description | Défaut |
|------|------|-------------|--------|
| isOpen | boolean | État d'ouverture de la modal | Obligatoire |
| onClose | function | Fonction appelée lors de la fermeture | Obligatoire |
| children | node | Contenu de la modal | null |
| title | string | Titre affiché dans l'en-tête | "Success!" |
| closeText | string | Texte du bouton de fermeture | "Close" |
| maxWidth | number | Largeur maximale en pixels | 400 |
| className | string | Classe CSS additionnelle | "" |
| fadeDuration | number | Durée de l'animation en ms | 300 |

Pour plus d'informations, consultez la documentation complète du composant.

## 📄 Licence
Ce projet et le composant Modal sont sous licence MIT.

Ce projet a été réalisé dans un but pédagogique dans le cadre de la formation OpenClassrooms – Développeur d'application JavaScript React.

## 👤 Auteur
**NIAKATE BIAGUY**  
Formation Développeur d'application JavaScript React – OpenClassrooms  
📅 Février 2025