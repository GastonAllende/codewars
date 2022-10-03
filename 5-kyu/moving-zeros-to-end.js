function moveZeros(arr) {
    let noZeros = arr.filter(x => x !== 0);
    return [...noZeros, ...Array(arr.length - noZeros.length).fill(0)];
}