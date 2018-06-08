module.exports = function (weekday, vacation) {
    if (!weekday || vacation) {
        return true;
    };
    return false;
};