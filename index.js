let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    cats.push("Ralph");
    return cats
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
    return cats
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats
}

function appendCat() {
    // appends a cat to the cats array and 
    // returns a new array, leaving the cats 
    // array unchanged
    let copyCats = [...cats, "Broom"]
    return copyCats
}

function prependCat() {
    // appends a cat to the cats array and 
    // returns a new array, leaving the cats 
    // array unchanged
    let copyCats = ["Arnold", ...cats,]
    return copyCats
}

function removeLastCat() {
    let copyCats = [...cats]
    copyCats.splice (2, 1);
    return copyCats
}

function removeFirstCat () {
    let copyCats = [...cats]
    copyCats.splice (0,1);
    return copyCats;
}