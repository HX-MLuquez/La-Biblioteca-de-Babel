const allCharacters = [
    ",", ".", " ","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "á", "é", "í", "ó", "ú", "ü", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "!", "@", "#", "$", "%", "&", "(", ")", "-", "_", "+", "=", "/", "?",
    "¿", "¡", ":", ";", "'", '"', "[", "]", "{", "}", "<", ">", "|", "\\",
  ];
  
export default allCharacters;

export function okCharacters(chars){
    const result = []
    chars.forEach(char => {
        if(char === "space") result.push(" ")
        else result.push(char)
    });
    return result
}