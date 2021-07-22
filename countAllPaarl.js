module.exports = function countAllPaarl(regNo) {
    var n = regNo.split(', ');
    var registration = [];
    //console.log(regNo);

    for (var i = 0; i < n.length; i++) {
        if (n[i].startsWith("CJ")) {
            registration.push(n[i]);

        }
    }
    return registration.length;
    //console.log(n)
}