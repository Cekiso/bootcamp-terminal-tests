module.exports = function totalPhoneBill(total) {
    //console.log(total)
    var cell = total.split(', ')
    var phoneBill = 0;

    for (var i = 0; i < cell.length; i++) {
        if (cell[i] === 'call') {
            phoneBill += 2.75;
        } else if (cell[i] === 'sms') {
            phoneBill += 0.65;
        }

    }
    return "R" + phoneBill.toFixed(2)
}