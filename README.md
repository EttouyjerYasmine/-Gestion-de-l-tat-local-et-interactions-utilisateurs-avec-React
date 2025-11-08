# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Execution du tp
##TP React – Gestion du State et des Hooks

### Objectif du TP
Ce TP a pour but de mettre en pratique les **hooks React**, notamment `useState` et `useEffect`, à travers des exercices concrets sur :
- La gestion du **state** dans les composants fonctionnels
- L’utilisation du **hook useEffect** pour les effets secondaires
- La création de **formulaires contrôlés**
- L’affichage dynamique et l’interactivité dans React


###  Contenu du TP

### Exercice 1 – Texte dynamique
Créer un composant qui affiche un texte différent à chaque clic, par exemple :
> Premier clic → Deuxième clic → Troisième clic

**Composant :** `DynamicText.js`

📸 *Capture d’écran :*  

-<img width="959" height="509" alt="TP2 5" src="https://github.com/user-attachments/assets/c2d51985-cf69-421e-8b80-6f1ea8ebf9e7" />

---

###Exercice 2 – Formulaire d’inscription
Créer un **formulaire contrôlé** avec deux champs :
- Prénom  
- Email  

Afficher les valeurs dans une **alerte** lors de la soumission.

**Composant :** `InscriptionForm.js`

-📸 *Capture d’écran :*  

-<img width="960" height="510" alt="TP2 6" src="https://github.com/user-attachments/assets/079a7b28-1aff-45a9-9a8e-e22c9d1cb8d7" />
-<img width="959" height="510" alt="TP2 7" src="https://github.com/user-attachments/assets/a776b726-04e0-458f-bc67-c18d723617f8" />

---

### Exercice 3 – Compteur avec useEffect
Créer un compteur qui :
- Affiche le **nombre de clics**
- Met à jour le **titre du document (document.title)** à chaque clic

**Composant :** `CompteurEffet.js`

📸 *Capture d’écran :*  
<img width="960" height="512" alt="TP2 9" src="https://github.com/user-attachments/assets/4f05bbf4-e575-4fdc-92a0-b1395702f4ad" />



## Structure du projet

tp-state/
├── node_modules/
├── public/
├── src/
│   ├── App.js
│   ├── DynamicText.js
│   ├── FormulaireNom.js
│   ├── InscriptionForm.js
│   ├── Compteur.js
│   ├── CompteurEffet.js
│   ├── MessageBouton.js
│   └── index.js
├── package.json
└── README.md

## ⚙️ Structure du projet

-<img width="960" height="511" alt="TP2 8" src="https://github.com/user-attachments/assets/aebfd555-1c31-4658-8730-902c928785ce" />


## Résultat du travail pratique
-Créer un composant Compteur simple avec useState
- <img width="955" height="486" alt="TP2 1" src="https://github.com/user-attachments/assets/6d4d0c20-d0a6-4129-b14f-5fdc11a53dcb" />
-Créer un composant MessageBouton avec événement onClick
-<img width="960" height="484" alt="TP2 2" src="https://github.com/user-attachments/assets/880e186f-ec61-43c6-8406-77769a9e397f" />
-Créer un formulaire contrôlé
-<img width="960" height="507" alt="TP2 3" src="https://github.com/user-attachments/assets/e662e6f1-bccb-427e-bd57-c001ccf08a67" />
-Ajouter un compteur avec useEffect
<img width="960" height="509" alt="TP2 4" src="https://github.com/user-attachments/assets/7c80dcb5-d510-401c-b9bc-b21bc3618349" />
<img width="959" height="509" alt="TP2 5" src="https://github.com/user-attachments/assets/960c5287-0f95-4428-9ca6-596f4fd9acef" />

