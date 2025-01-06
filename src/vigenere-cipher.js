const { NotImplementedError } = require("../extensions/index.js");

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
  constructor(param = true) {
    this.param = param;
    this.code = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    const messageU = message.toUpperCase();
    const keyU = key.toUpperCase();
    let result = "";
    let j = 0;
    for (let i = 0; i < messageU.length; i += 1) {
      const charIndex = this.code.indexOf(messageU[i]);
      if (charIndex !== -1) {
        const keyIndex = this.code.indexOf(keyU[j % keyU.length]);
        const shiftedIndex = (charIndex + keyIndex) % 26;
        result += this.code[shiftedIndex];
        j += 1;
      } else result += messageU[i];
    }
    result = this.param ? result : result.split("").reverse().join("");
    return result;
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    const messageU = message.toUpperCase();
    const keyU = key.toUpperCase();
    let result = "";
    let j = 0;
    for (let i = 0; i < messageU.length; i += 1) {
      const charIndex = this.code.indexOf(messageU[i]);
      if (charIndex !== -1) {
        const keyIndex = this.code.indexOf(keyU[j % keyU.length]);
        const shiftedIndex = (charIndex - keyIndex + 26) % 26;
        result += this.code[shiftedIndex];
        j += 1;
      } else result += messageU[i];
    }
    result = this.param ? result : result.split("").reverse().join("");
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
