import React, { useState } from "react";
import { laBibliotecaDeBabel } from "./utils/laBibliotecaDeBabel.js";
import allCharacters from "./utils/allCharacters.js";
import "./App.css";
import { okCharacters } from "./utils/allCharacters.js";

export default function App() {
  const [quantityCharacters, setQuantityCharacters] = useState(1);
  const [characterTypes, setCharacterTypes] = useState([]);
  const [message, setMessage] = useState("");
  const [bttnMessage, setBttnMessage] = useState(false);
  const [combinations, setCombinations] = useState([]);
  const [availableCharacters, setAvailableCharacters] = useState(allCharacters);

  function addCharacters(e) {
    var add = true;
    const selectedOption = e.target.selectedOptions[0].value;
    // console.log("in addCharacters");
    // console.log("selectedOption -> ", selectedOption);
    characterTypes.forEach((char) => {
      if (selectedOption === char) {
        alert("ese caracter ya ha sido agregado");
        add = false;
        return;
      }
    });
    if (add) {
      const result = [...characterTypes];
      result.push(selectedOption);
      setCharacterTypes(result);
    }
  }
  function deleteCharacters(char) {
    console.log("char --> ", char);
    const filterCharacters = characterTypes.filter((e) => e !== char);
    setCharacterTypes(filterCharacters);
  }
  function confirm() {
    const resultCharacters = okCharacters(characterTypes);
    const allCombinations = laBibliotecaDeBabel(
      quantityCharacters,
      resultCharacters
    );
    setCombinations(allCombinations);
    return;
  }
  function reset() {
    setBttnMessage(false);
    setCharacterTypes([]);
    setCombinations([]);
    setMessage("");
    setQuantityCharacters(1);
    return;
  }

  const generateCombinations = () => {
    const posibilidades = characterTypes.length ** quantityCharacters;
    if (posibilidades > 25040) {
      setMessage(
        `"La cantidad de posibilidades es muy alta. \n 
        Y su pc de seguro no puede procesar todas las posibilidades.
        ¿Desea continuar?"`
      );
      setBttnMessage(true);
      return;
    } else {
      const resultCharacters = okCharacters(characterTypes);
      const allCombinations = laBibliotecaDeBabel(
        quantityCharacters,
        resultCharacters
      );
      setMessage(`La cantidad de posibilidades es ${posibilidades}`);
      setCombinations(allCombinations);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="header">
          <h1>La Biblioteca de Babel</h1>
          <h3>
            Para soñar con obtener todos los libros que existen y existirán
          </h3>
          <h4>
            Código que contiene TODOS los LIBROS, los ya existentes y los que
            aún no han de existir también. Tipeado en javascript. Recreado de
            una función creadora de matrices binarias.
          </h4>
          <h4 style={{ color: "blue" }}>
            Te Invito a probar con algo pequeño, como: Cantidad de caracteres: 4
            y Tipos de caracteres: "space" , "p" , "a" , "m"
          </h4>
        </div>
        <div className="centerBody">
          <div className="boxLeft">
            <label>
              Cantidad de caracteres:
              <input
                type="number"
                value={quantityCharacters}
                onChange={(e) =>
                  setQuantityCharacters(parseInt(e.target.value))
                }
                key="101-5040-ASD"
                name="number"
              />
            </label>
            <br />
            <label>
              Tipos de caracteres:
              <select
                // multiple
                value={characterTypes}
                onChange={addCharacters}
              >
                {allCharacters &&
                  allCharacters.map((character, index) => {
                    if (character === " ") {
                      return (
                        <option key={index} value={"space"}>
                          "space"
                        </option>
                      );
                    }
                    return (
                      <option key={index} value={character}>
                        {character}
                      </option>
                    );
                  })}
              </select>
            </label>
            <br />
            <br />
            <div>
              Tipos de caracteres seleccionados:
              {characterTypes.map((character) => (
                <div className="chars" key={character}>
                  <button onClick={() => deleteCharacters(character)}>x</button>
                  <span style={{ marginLeft: "5px", cursor: "pointer" }}>
                    {character}
                  </span>
                </div>
              ))}
            </div>
            <br />
            <div className="message">
              {bttnMessage ? (
                <div>
                  <p style={{ color: "red" }}>{message}</p>

                  <button onClick={confirm}>Continuar</button>
                  <br />
                  <button onClick={reset}>Cancelar</button>
                </div>
              ) : (
                <p>{message}</p>
              )}
            </div>
            <br />
            {bttnMessage ? null : (
              <>
                <button onClick={generateCombinations}>
                  Generar Combinaciones
                </button>
                <br />
                <button onClick={reset}>Reiniciar</button>
              </>
            )}

            <br />
          </div>
          <div className="boxRight">
            {combinations &&
              combinations.map((combination, index) => (
                <div
                  key={index}
                  style={{
                    border: "1px solid black",
                    padding: "5px",
                    margin: "5px",
                    display: "inline-block",
                  }}
                >
                  {combination}
                </div>
              ))}
          </div>
        </div>
        <div className="footer">
          <p>
            Código que contiene TODOS los LIBROS, tanto los existentes como los
            que aún no han sido creados. Este código está escrito en JavaScript
            y recrea una función que genera matrices binarias.
          </p>

          <p>
            Para soñar con obtener todos los libros que existen, y existirán,
            nos podemos basar en la siguiente información:
          </p>

          <ul>
            <li>
              <strong>Cantidad de caracteres en la novela más larga:</strong>
              <br />
              La obra "A la recherche du temps perdu" de Marcel Proust contiene
              aproximadamente 9.609.000 caracteres, contando cada letra y
              espacio como un carácter. Proust produjo el primer volumen de esta
              obra maestra de 13 volúmenes en 1912, y la segunda parte de su
              obra ganó premios internacionales.
            </li>
            <li>
              <strong>Extensión de una novela estándar:</strong>
              <br />
              Una novela estándar se sitúa entre las 40.000 y las 120.000
              palabras, lo que equivale a aproximadamente 739.154 caracteres por
              volumen. Este número de caracteres por volumen se considera ideal
              para una novela estándar.
            </li>
            <li>
              <strong>Tipos de caracteres necesarios:</strong>
              <br />
              Se requieren 92 tipos de caracteres al menos dentro del alfabeto
              español para toda la literatura en general.
            </li>
            <li>
              <strong>Número de combinaciones posibles:</strong>
              <br />
              Considerando solo la lengua española, el número de combinaciones
              posibles es extremadamente extenso, fuera de la comprensión
              humana.
            </li>
          </ul>

          <p>
            Según Borges, el universo (que otros llaman la Biblioteca) se
            compone de un número indefinido, y tal vez infinito, de galerías
            hexagonales. Cada galería contiene vastos pozos de ventilación y
            está cercada por barandas bajísimas. Desde cualquier hexágono se
            pueden ver los pisos inferiores y superiores interminablemente. La
            distribución de las galerías es invariable, y cada hexágono tiene
            veinte anaqueles a cinco largos anaqueles por lado. Borges comenta
            que al estar todos los libros en la Biblioteca, podríamos encontrar
            el testamento de Judas Tadeo, los libros que Cervantes no pudo
            terminar, todas las canciones, todas las poesías, el nombre de Dios,
            todas las verdades, todas las mentiras, entre otros.
          </p>
        </div>
      </div>
    </div>
  );
}
