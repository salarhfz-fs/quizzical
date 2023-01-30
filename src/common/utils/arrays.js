function shuffle(arr) {
    const clone = [...arr]
    for (let i = clone.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [clone[i], clone[j]] = [clone[j], clone[i]];
    }
    return clone;
}

export {
    shuffle,
}
