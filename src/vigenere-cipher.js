const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(text, key) {
    let textLength = text.length;
    let fullKey = '';
    const alphaBet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let nextLetterIndex = 0;
    for (let i = 0; i < textLength; i++) {
      if (alphaBet.indexOf(text[i].toUpperCase()) >= 0) {
        fullKey += key[nextLetterIndex % key.length].toUpperCase();
        nextLetterIndex++;
      } else {
        fullKey += 'A';
      }
    }

    let encryptedText = '';

    for (let i = 0; i < textLength; i++) {
      let currentAlphaBet = '';
      const alphaBetNumber = alphaBet.indexOf(fullKey[i]);
      for (let j = alphaBetNumber; j < alphaBetNumber + 26; j++) {
        if (j > 25) {
          currentAlphaBet += alphaBet[j - 26];
        } else {
          currentAlphaBet += alphaBet[j];
        }
      }
      const indexOfLetter = alphaBet.indexOf(text[i].toUpperCase());
      if (indexOfLetter >= 0) {
        encryptedText += currentAlphaBet[indexOfLetter];
      } else {
        encryptedText += text[i];
      }
    }

    if (this.direct === false) {
      encryptedText = encryptedText.split('').reverse().join('')
    }

    return encryptedText;
  }

  decrypt(encryptedText, key) {
    let textLength = encryptedText.length;
    let fullKey = '';
    const alphaBet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let nextLetterIndex = 0;
    for (let i = 0; i < textLength; i++) {
      if (alphaBet.indexOf(encryptedText[i].toUpperCase()) >= 0) {
        fullKey += key[nextLetterIndex % key.length].toUpperCase();
        nextLetterIndex++;
      } else {
        fullKey += 'A';
      }
    }

    let decryptedText = '';

    for (let i = 0; i < textLength; i++) {
      let currentAlphaBet = '';
      const alphaBetNumber = alphaBet.indexOf(fullKey[i]);
      for (let j = alphaBetNumber; j < alphaBetNumber + 26; j++) {
        if (j > 25) {
          currentAlphaBet += alphaBet[j - 26];
        } else {
          currentAlphaBet += alphaBet[j];
        }
      }
      const indexOfLetter = currentAlphaBet.indexOf(encryptedText[i].toUpperCase());
      if (indexOfLetter >= 0) {
        decryptedText += alphaBet[indexOfLetter];
      } else {
        decryptedText += encryptedText[i];
      }
    }

    if (this.direct === false) {
      decryptedText = decryptedText.split('').reverse().join('')
    }

    return decryptedText;
  }
}

module.exports = {
  VigenereCipheringMachine
};
