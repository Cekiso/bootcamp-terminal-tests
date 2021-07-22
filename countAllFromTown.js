module.exports = function countAllFromTown(regNo, loc) {
    var n = regNo.split(',');
    var registration = [];
    //console.log(regNo);

    for (var i = 0; i < n.length; i++) {

        //console.log(d)
        if (n[i].startsWith('CL')) {
            var d = n[i].trim();
            registration.push(n[i]);

        }
    }
    return registration.length
        //console.log(n)
}