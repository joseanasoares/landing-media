const fs = require('fs-extra');

//script para verificar a criação dea pasta assets
//adicionar em  "build": "ng build --configuration={context-name} && node copy-assets.js", no package.json, onde context-name é o nome do contexto

async function copyAssets() {
  try {
    await fs.emptyDir('./dist/land-media/assets-context2');
    await fs.copy('./src/assets-context2', './dist/land-media/assets-context2');
    console.log('Assets copied successfully!');
  } catch (err) {
    console.error('Error copying assets:', err);
  }
}

copyAssets();
