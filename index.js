// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
destructivelyAppendCat = function (name) {
    cats.push(name);
};
destructivelyPrependCat = function (name) {
    cats.unshift(name);
};
destructivelyRemoveLastCat = function () {
    cats.pop();
};
destructivelyRemoveFirstCat = function () {
    cats.shift();
};
appendCat = function (name) {
    return [...cats, name];
};
removeLastCat = function () {
    return cats.slice(0, -1);
};
prependCat = function (name) {
    return [name, ...cats];
};
appendCat = function (name) {
    return [...cats, name];
};
removeFirstCat = function () {
    return cats.slice(1);
}