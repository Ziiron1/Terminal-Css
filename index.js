const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let properties = new Set();

console.log('Digite as propriedades de CSS (ou SAIR para encerrar): ');

rl.on('line', (input) => {
  let trimmedInput = input.trim();
  if (trimmedInput.toLowerCase() === 'sair') {
    console.log('Propriedades ordenadas:');
    [...properties].sort().forEach((property) => {
      console.log(property);
    });
    rl.close();
  } else if (trimmedInput.length > 0) {
    properties.add(trimmedInput);
  }
});

rl.on('close', () => {
  console.log('Programa encerrado');
  process.exit(0);
});
