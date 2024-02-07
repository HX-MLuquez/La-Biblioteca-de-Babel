//>>>>>> EL CÓDIGO QUE CONTIENE TODOS LOS LIBROS ES:
export function laBibliotecaDeBabel(cantidadCaracteres, tiposDeCaracteres) {
  if (cantidadCaracteres < 1) return [];
  const result = [];
  losCaracteres("", cantidadCaracteres);
  return result;
  function losCaracteres(caracter, cantidadCaracteres) {
    if (cantidadCaracteres === 0) result.push(caracter);
    else {
      for (let i = 0; i < tiposDeCaracteres.length; i++) {
        losCaracteres(caracter + tiposDeCaracteres[i], cantidadCaracteres - 1);
      }
    }
  }
}
