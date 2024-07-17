'use strict'
const rate = 26;
const dolAmountFirst = 10;
const dolAmountLast = 100;
let hrnAmount = '';
for (let i = dolAmountFirst; i <= dolAmountLast; i += 10 ){
     hrnAmount = i * rate;
     console.log(`With $${i} you would get ₴${hrnAmount}`);
}