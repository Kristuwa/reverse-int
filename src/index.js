module.exports = function reverse(n) {
    if (n < 0) {
        return Number((0 - n).toString().split("").reverse().join(""));
    }
    return Number(n.toString().split("").reverse().join(""));
};
