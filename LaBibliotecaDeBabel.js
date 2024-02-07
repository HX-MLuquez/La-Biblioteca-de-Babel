/*                           
*                           LA BIBLIOTECA DE BABEL

   En este código se encuentran todos los libros, los que ya se escribieron y
los que aún no se escriben. Se hallan todas las poesías, todos los relatos,
todas las soluciones de todos los problemas, todas las ideas, todas las cosas,
el nombre del creador de todas las cosas, todos los mensajes de texto que escribiré 
como también todos los mensajes que tu aún no has escrito, etc...

Aquí pueden ejecutar la function y ver su funcionamiento por consola (terminal)
*/

//* Entre 83 a 96 caracteres tipos de caracteres necesarios posibles considerando solo la lengua española
const hyperLibreriaCaracteres = [];  // Ver de Ejemplo allCharacters de la carpeta utils

const hyperNovelaCaracteres = 739.154;

// Objetos para realizar ejemplo del código
// EJEMPLO DE LA BIBLIOTECA DE BABEL SIMPLE
// Supongamos que nuestro idioma solo contiene dos tipos de caracteres: "a" y "m",
// y que tenemos una cantidad de caracteres de 3 solamente.
// ENTONCES EL CÓDIGO NOS DEVOLVERÁ TODAS LAS POSIBILIDADES DE ESE MODO DE COMUNICARNOS
// CUAL ESE SEA NUESTRO IDIOMA.
// EL CÓDIGO NOS DEVUELVE --->>> ['aaa', 'aam','ama', 'amm','maa', 'mam','mma', 'mmm'];
const libreriaCaracteres = ["a", "m"];
const cantidadCaracteres = 3;

//   // --------------------------------------- OTRO EJEMPLO UN POCO MÁS COMPLEJO
// VERSION de mas de 2 parametros
const arrayExample = ["a", "o", "p", "t"];
const cantidadCaracteresExample = 4;

//>>>>>> EL CÓDIGO QUE CONTIENE TODOS LOS LIBROS ES:
function laBibliotecaDeBabel(cantidadCaracteres, tiposDeCaracteres) {
  const checkPossibilities = tiposDeCaracteres.length ** cantidadCaracteres;
  console.log("checkPossibilities -> ", checkPossibilities);
  if (checkPossibilities > 25040) {
    return "son muchas posibilidades para procesar '///o_._o\\\'";
  }
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

// console.log('laBibliotecaDeBabel is:___', laBibliotecaDeBabel(4));
console.dir(laBibliotecaDeBabel(cantidadCaracteres, libreriaCaracteres), {
  maxArrayLength: null,
});
console.dir(laBibliotecaDeBabel(cantidadCaracteresExample, arrayExample), {
  maxArrayLength: null,
});
// console.dir(laBibliotecaDeBabel(4, arrayExample), {'maxArrayLength': null}); ---> es idem al pedido del console anterior de la linea 52.

// AL CONSOLOGEAR EL CÓDIGO DE LA LÍNEA 55 SUCEDERÁ LO SIGUIENTE:
// LA MÁQUINA SE CONGELARÁ ESPERANDO OBTENER EL CASI INFINITO NÚMERO DE LIBROS
// QUE SE CREARAN, EN ESTE CÓDIGO ESTÁN TODOS LOS LIBROS DE LA BIBLIOTECA DE BABEL.
// >>>
// >>>>>> EL TOTAL DE LIBROS (DE ARRAY) ES DE 83 ^739.154 (83 ELEVADO A LA 739.154), QUE SI BIEN NO ES INFINITO ANTE NOSOTROS SI LO ES.
// >>>>>> console.dir(laBibliotecaDeBabel(cantidadCaracteresExample, arrayExample), {'maxArrayLength': null});
// >>>>>>
// >>>>>> -no se recomienda ejecutar este console nunca- <<<<<<

//--------------------------------------------------------------------------------------------------------
//                PROBANDO EL CÓDIGO EN BUSCA DE UNA Y VARIAS FRASES ULTRA ULTRA BREVES Y SIMPLES

// ama ya

const tipoCaracteresFrases = ["a", "m", "p", " "]; // tiene 4 tipos de caracteres
const cantidadCaracteresFrases = 6;
// contiene 4.096 (que es de 4^6) de posibilidades.
console.dir(
  laBibliotecaDeBabel(cantidadCaracteresFrases, tipoCaracteresFrases),
  { maxArrayLength: null }
);
//>>> no hará BOOM pero demorará un poco.

//--------------------------------------------------------------------------------------------------------
//                PROBANDO EL CÓDIGO EN BUSCA DE UNA Y VARIAS FRASES ULTRA BREVES

// amar ahora

// const tipoCaracteresFrases = ["a","m","r","h","o"," "]; // tiene 6 tipos de caracteres
// const cantidadCaracteresFrases = 10;
// AQUÍ TAMBIEN PUEDE BOOMM YA QUE SON 60.466.176 DE POSIBILIDADES QUE NOS DEBE MOSTRAR POR PANTALLA, jua jajajjaaaa

//--------------------------------------------------------------------------------------------------------
//                PROBANDO EL CÓDIGO EN BUSCA DE UNA Y VARIAS FRASES

// Créeme: todo tiene su tiempo.

// const tipoCaracteresFrases = ["c","r","e","m","t","o","d","i","n","s","u","p"," "]; // tiene 13 tipos de caracteres
// const cantidadCaracteresFrases = 27;
// AQUÍ TAMBIEN HACE BOOMM YA QUE SON 1.192.533.292.512.492.016.559.195.008.117 DE POSIBILIDADES QUE NOS DEBE MOSTRAR POR PANTALLA, jua jajajjaaaa

//--------------------------------------------------------------------------------------------------------
//                PROBANDO EL CÓDIGO EN BUSCA DE UNA Y VARIAS POESÍAS
//   En las noches claras (Gloria Fuentes)
// En las noches claras,
// resuelvo el problema de la soledad del ser.
// Invito a la luna y con mi sombra somos tres.     de 107 cifras (caracteres)
// const tipoCaracteresPoesia = ["a","e","i","o","u","n","l","s","c","h","r","v","p","b","m","d","t"," "] //--->>> 18 tipos de caracteres
// const cantidadCaracteresPoesia = 107;
// Las poesías posibles que devolverá son: 18 ^ 107 = 2,0613799428135783333375590033332e+134
// console.dir(laBibliotecaDeBabel(cantidadCaracteresPoesia, tipoCaracteresPoesia), { 'maxArrayLength': null });
//>>>>>> CUIDADO QUE CON ESTA SOLICITUD AL CÓDIGO DE LA LÍNEA 71 LA MÁQUINA DE SEGURO HARÁ BOOMMMM
// jua jua jaaaajaaaaa

//----------------------------------------------------------------------------------------------------------------------------------

// LA SELECCIÓN DEL TOTAL DE CARACTERES Y LOS TIPOS DE CARACTERES A UTILIZAR SE BASAN EN:

// que La novela más larga
// A la recherche du temps perdu de Marcel Proust contiene un estimado
// de 9.609.000 caracteres (cada letra cuenta como un carácter.
// Los espacios también se cuentan, como un carácter cada uno).
// El título se traduce como «Recuerdo de las cosas pasadas».
// Proust produjo el primer volumen de su obra maestra de 13
// volúmenes en 1912 (fue publicado por primera vez en 1913).
// La segunda parte de su obra ganó premios internacionales tan
// pronto como fue publicada y con ella, una reputación internacional.
// 9.609.000 / 13 = 739.154 caracteres por volumen.
// Pero Pues bien, se entiende por novela estándar aquella que se sitúa entre las 40.000
// y las 120.000 palabras. Por debajo de este límite están el cuento y el relato
// o novela corta. Luego, cada género tiene una extensión determinada: Novela adolescente:
// entre 50.000 y 90.000 palabras. Y 1.000 palabras son 6.000 caracteres aproximadamente.
// Y 120.000 palabras son 720.000 caracteres aproximadamente.
// POR ELLO 739.154 caracteres por volumen SON UN NUMERO DE CARACTERES IDEAL.
// Y LOS TIPOS DE CARACTERES SE DEBE A QUE SON LOS REQUERIDOS AL MENOS DENTRO DEL
// ALFABETO ESPAÑOL EN TODA LA LITERATURA EN GENERAL.

// SEGÚN BORGES:
// El universo (que otros llaman la Biblioteca) se compone de un número indefinido, y
// tal vez infinito, de galerías hexagonales, con vastos pozos de ventilación en el medio,
// cercados por barandas bajísimas. Desde cualquier hexágono se ven los pisos inferiores y
// superiores: interminablemente. La distribución de las galerías es invariable. Veinte
// anaqueles, a cinco largos anaqueles por lado, cubren todos los lados menos dos; su altura,
// que es la de los pisos, excede apenas la de un bibliotecario normal. Una de las caras libres
// da a un angosto zaguán, que desemboca en otra galería, idéntica a la primera y a todas. A
// izquierda y a derecha del zaguán hay dos gabinetes minúsculos. Uno permite dormir de
// pie; otro, satisfacer las necesidades finales. Por ahí pasa la escalera espiral, que se abisma
// y se eleva hacia lo remoto. En el zaguán hay un espejo, que fielmente duplica las
// apariencias. Los hombres suelen inferir de ese espejo que la Biblioteca no es infinita (si
// lo fuera realmente ¿a qué esa duplicación ilusoria?); yo prefiero soñar que las superficies
// bruñidas figuran y prometen el infinito...
// BORGES COMENTA QUE AL ESTAR TODOS LOS LIBROS PODREMOS ENCONTRAR:
// EL TESTAMENTO DE JUDAS TADEOS
// LOS LIBROS QUE CERVANTES NO PUDO TERMINAR
// TODAS LAS CANCIONES
// TODAS LAS POESÍAS
// EL NOMBRE DE DIOS
// TODAS LAS VERDADES
// TODAS LAS MENTIRAS
// ETC... ETC... ETC...

//----------------------------------------------------------------------------------------------------------------------------------
// Comparto un Link de una composición de música contemporánea que se gesta a partir
// de la idea de La Boblioteca de Babel
// >>>>>> https://www.youtube.com/watch?v=7DCPRcseNHA

// -------------------------------------------------------------------------------------------------------------------------
// PROBANDO DE INSERTAR DENTRO DE UN SUPER OBJETO DONDE CADA PROPIEDAD ES UN LIBRO
// DONDE EL TOTAL DE PROPIEDADES (DE LIBROS) ES DE 83 ^739.154 (83 ELEVADO A 739.154).
// const bibliotecaDeBabel = function (arrayCaract, cantidadCaract) {
//     cantidadCaract = Math.pow(2, cantidadCaract);
//     // console.log(cantidadCaract);
//     let objIterable = {};
//     let resultado = {};
//     for (let i = 1; i < cantidadCaract + 1; i++) {
//         let k = "property_" + i;
//         objIterable[k] = [];
//     }
//     console.log("mi objIterable es___",objIterable);

// };

// bibliotecaDeBabel(libreriaCaracteres, cantidadCaracteres);

// const objIterable = {
//     a: 1,
//     b: 2,
//     c: 3,
// };
// const objVacio = {};
// let j = 1;
// let k = "property_" + j;
// console.log(k);
// objVacio[k] = "hola";
// objVacio.property_2 = "";
// console.log("objVacio es ___", objVacio);
// objIterable.a=20;
// console.log(objIterable);
// console.log(objIterable.a);
// console.log(Object.keys(objIterable));
// console.log(Object.keys(objIterable)[0]);

//--------------------------------------------------------------------------------------------------------------------------
// 1 00
// 2 01
// 3 10
// 4 11

// 1 000
// 2 001
// 3 010
// 4 011
// 5 100
// 6 101
// 7 110
// 8 111

// 1  0000
// 2  0001
// 3  0010
// 4  0011
// 5  0100
// 6  0101
// 7  0110
// 8  0111
// 9  1111
// 10 1110
// 11 1101
// 12 1100
// 13 1000
// 14 1001
// 15 1010
// 16 1011

// El resultado debe ser
// 1  aaaa
// 2  aaam
// 3  aama
// 4  aamm
// 5  amaa
// 6  amam
// 7  amma
// 8  ammm
// 9  mmmm
// 10 mmma
// 11 mmam
// 12 mmaa
// 13 mamm
// 14 mama -----> acá se forma mama jua
// 15 maam
// 16 maaa

// ------------------------------------------------------------------------------------------------------------------------

