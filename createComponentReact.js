import fs from 'fs/promises';
import path from 'path';

const componentName = process.argv[2];

if (!componentName) {
  console.error('Veuillez spécifier un nom de composant.');
  process.exit(1);
}

// Fonction pour transformer la première lettre en minuscule
const transformToCamelCase = (str) => {
  return str.charAt(0).toLowerCase() + str.slice(1);
};

const componentDir = path.join(
  process.cwd(),
  'src',
  'components',
  componentName
);

fs.access(componentDir)
  .then(() => {
    console.error(`Le dossier ${componentName} existe déjà.`);
    process.exit(1);
  })
  .catch(() => {
    // Le dossier n'existe pas, on peut le créer
    fs.mkdir(componentDir)
      .then(() =>
        fs.writeFile(
          path.join(componentDir, `${componentName}.jsx`),
          getInitialJSXContent(componentName)
        )
      )
      .then(() => {
        // Écrivez le fichier .scss avec le préfixe _nomDuComposant
        const scssFileName = `_${transformToCamelCase(componentName)}.scss`;
        return fs.writeFile(path.join(componentDir, scssFileName), '');
      })
      .then(() => {
        // Lire le fichier index.scss
        return fs.readFile(
          path.join(process.cwd(), 'src', 'style', 'index.scss'),
          'utf-8'
        );
      })
      .then((data) => {
        // Ajouter l'import dans le fichier index.scss
        const importStatement = `@import '../components/${componentName}/${transformToCamelCase(
          componentName
        )}';\n`;
        const updatedData = data + importStatement; // Ajouter l'import à la fin
        return fs.writeFile(
          path.join(process.cwd(), 'src', 'style', 'index.scss'),
          updatedData
        );
      })
      .then(() => {
        console.log(`Le composant ${componentName} a été créé avec succès.`);
      })
      .catch((error) => {
        console.error('Erreur lors de la création du composant:', error);
      });
  });

// Fonction pour obtenir le contenu initial du fichier JSX
const getInitialJSXContent = (componentName) => {
  return `import React from 'react';

const ${componentName} = () => {
  return (
    <div>
      ${componentName}
    </div>
  );
};

export default ${componentName};
`;
};
