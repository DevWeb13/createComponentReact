# createComponentReact

Ce dépôt contient un script personnalisé qui facilite la création rapide de nouveaux composants React. Le script permet de créer automatiquement les fichiers nécessaires pour un nouveau composant, y compris le fichier JSX avec le code initial, le fichier SCSS pour les styles, et ajoute automatiquement l'import du fichier SCSS dans le fichier d'index SCSS du projet.

Utilisation :

1. Clonez ce dépôt sur votre machine locale.
2. Exécutez le script en utilisant la commande "npm run create:component NomDuComposant" en remplaçant "NomDuComposant" par le nom du composant que vous souhaitez créer.
3. Le script créera automatiquement le dossier du composant avec les fichiers nécessaires prêts à être modifiés.

Contributions et suggestions d'amélioration sont les bienvenues !

Auteur : VotreNom

# createComponentReact

Un script personnalisé pour créer rapidement des composants React dans vos projets.

## Prérequis

Avant d'utiliser ce script, assurez-vous d'avoir Node.js installé sur votre machine. Vous pouvez télécharger Node.js à partir du site officiel : https://nodejs.org/

## Utilisation

1. Clonez ce dépôt sur votre machine locale.

```bash
git clone https://github.com/votre-utilisateur/createComponentReact.git
```

2. Accédez au dossier du dépôt cloné.

```bash
cd createComponentReact
```

3. Exécutez le script en spécifiant le nom du composant que vous souhaitez créer.

```bash
node createComponent.js NomDuComposant
```

Le script créera un nouveau dossier avec le nom du composant dans le répertoire "src/components" de votre projet. Il créera également les fichiers "NomDuComposant.jsx" et "\_nomDuComposant.scss" avec un contenu initial.

Le script ajoutera automatiquement l'import du fichier .scss du nouveau composant dans le fichier "src/style/index.scss".

N'oubliez pas de remplacer "NomDuComposant" par le nom réel de votre composant. Assurez-vous également de placer le fichier "createComponent.js" dans le répertoire racine de votre projet React pour l'utiliser facilement.

Licence
Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.
