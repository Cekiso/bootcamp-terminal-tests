module.exports = function isFromBellville(vehicle) {
    //var vehicle = CY123;
    if (vehicle.startsWith('CY')) {
        return true;
    } else {
        return false;
    }
    //console.log(isFromBellville);
}