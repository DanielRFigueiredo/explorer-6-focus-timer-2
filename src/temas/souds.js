export const souds = {
  floresta: new Audio('./assets/sounds/Floresta.wav'),
  chuva: new Audio('./assets/sounds/Chuva.wav'),
  cafeteria: new Audio('./assets/sounds/Cafeteria.wav'),
  lareira: new Audio('./assets/sounds/Lareira.wav'),
}

for (let soud in souds) {
  souds[soud].loop = true
}