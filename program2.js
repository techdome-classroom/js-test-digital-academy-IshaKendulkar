/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    

    function romanToInt(s) {
        const romanValues = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };
    
        let result = 0;
    
        for (let i = 0; i < s.length; i++) {
            const currentSymbolValue = romanValues[s[i]];
            const nextSymbolValue = romanValues[s[i + 1]];
    
            if (nextSymbolValue > currentSymbolValue) {
                result += (nextSymbolValue - currentSymbolValue);
                i++;  // Skip the next symbol since it was used in subtraction
            } else {
                result += currentSymbolValue;
            }
        }
    
        return result;
    }
    
    // Examples
    console.log(romanToInt("III"));       // Output: 3
    console.log(romanToInt("LVIII"));     // Output: 58
    console.log(romanToInt("MCMXCIV"));   // Output: 1994
    


};


module.exports={romanToInt}


