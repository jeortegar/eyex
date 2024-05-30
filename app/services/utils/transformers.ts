export const capitalizeString = (inputString: any) => {
  if (inputString) {
    // Dividir la cadena en palabras usando un espacio como separador
    let words = inputString.split(" ");
    // Iterar a través de cada palabra
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      // Capitalizar la primera letra de la palabra y convertir el resto a minúsculas
      words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    // Unir las palabras capitalizadas para formar la cadena final
    return words.join(" ");
  }
};
