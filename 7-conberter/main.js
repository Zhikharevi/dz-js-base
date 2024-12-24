const convert = (sum, sourceCurrency, targetCurrency) => {
    switch (sourceCurrency) {
        case 'руб':
            switch (targetCurrency) {
                case '$': return sum / 103; 
                case '€': return sum / 110;
                default: return null;
            }
        case '$':
            switch (targetCurrency) {
                case 'руб': return sum * 103; 
                case '€': return sum / 1.05;
                default: return null;
            }
        case '€':
            switch (targetCurrency) {
                case '$': return sum * 1.05; 
                case 'руб': return sum * 110;
                default: return null;
            }
        default: return null;
    }
}

const sourceCurrency = '€';
const targetCurrency = '$';
const sum = 10000;
console.log(convert(sum, sourceCurrency, targetCurrency));

