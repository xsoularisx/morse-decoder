const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '**********': ' '
};

function decode(expr) {
    let splitArr = [];
    for (let i = 0; i < expr.length; i += 10) {
        const chunk = expr.slice(i, i + 10)
        splitArr.push(chunk)

    }
    morseArr = splitArr.map(elem => { return elem.replace(/10/g, ".").replace(/11/g, "-").replace(/0/g, "") })
    decodeArr = morseArr.map(elem => { return MORSE_TABLE[elem] }).join('')
    return decodeArr
}

module.exports = {
    decode
}