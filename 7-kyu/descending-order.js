function descendingOrder(n) {
    const decNumbers = Array.from(String(n), Number).sort().reverse().join("");
    return parseInt(decNumbers);
}
