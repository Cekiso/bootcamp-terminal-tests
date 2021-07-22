module.exports = function isWeekday(day) {
    return day.startsWith('M', 'T', 'W', 'T', 'F');
}