"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = {
    blue: "\u001b[36m",
    red: "\u001b[31m",
    green: "\u001b[32m",
    yellow: "\u001b[33m",
    darkblue: "\u001b[34m",
    magenta: "\u001b[35m",
    white: "\u001b[37m",
    black: "\u001b[30m",
    brightblack: "\u001b[30;1m",
    brightred: "\u001b[31;1m",
    brightgreen: "\u001b[32;1m",
    brifghtyellow: "\u001b[33;1m",
    brightblue: "\u001b[34;1m",
    brightmagenta: "\u001b[35;1m",
    brightcyan: "\u001b[36;1m",
    brightwhite: "\u001b[37;1m",
    default: "\u001b[0m"
};
const background = {
    black: "\u001b[40m",
    red: "\u001b[41m",
    green: "\u001b[42m",
    yellow: "\u001b[43m",
    blue: "\u001b[44m",
    magenta: "\u001b[45m",
    cyan: "\u001b[46m",
    white: "\u001b[47m",
    brightblack: "\u001b[40;1m",
    brightred: "\u001b[41;1m",
    brightgreen: "\u001b[42;1m",
    brifghtyellow: "\u001b[43;1m",
    brightblue: "\u001b[44;1m",
    brightmagenta: "\u001b[45;1m",
    brightcyan: "\u001b[46;1m",
    brightwhite: "\u001b[47;1m",
    default: "\u001b[0m"
};
const MONTHS = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sept',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
};
const getNumberOrdinal = (int) => {
    return int == 1 ? `${int}st` : int == 2 ? `${int}nd` : int == 3 ? `${int}rd` : int >= 4 ? `${int}th` : null;
};
const getdate = () => {
    const now = new Date();
    const hours = `0${now.getHours()}`.slice(-2);
    const minutes = `0${now.getMinutes()}`.slice(-2);
    const seconds = `0${now.getSeconds()}`.slice(-2);
    const month = MONTHS[now.getMonth()];
    const day = getNumberOrdinal(now.getDate()) === null ? '' : getNumberOrdinal(now.getDate());
    const year = now.getFullYear();
    const ap = now.getHours() >= 12 ? 'PM' : 'AM';
    return `[${month} ${day}, ${year} | ${hours}:${minutes}:${seconds}${ap}]`;
};
function Logger(title, message, date, color) {
    if (!color)
        color = [colors.blue, colors.default];
    for (var i=0; i<color.length; i++) {
        const Colors = Object.keys(background);
        if (!Colors.includes(color[i].toLowerCase()))
            throw new Error('Invalid color was provided.');
    }
    return console.log(`${date ? getdate() + ' ' + background[color[0]] : background[color[0]]}[${title}]:${color[1] ? background['default'] + background[color[1]] : '\u001b[0m'} ${message} ${colors.default}`);
}
exports.default = Logger;
module.exports = Logger;
