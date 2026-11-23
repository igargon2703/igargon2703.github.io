function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

document.getElementById("btnCalcular").addEventListener("click", () => {
    let limite = Number(document.getElementById("limiteInput").value);
    let primos = [];

    for (let i = 1; i <= limite; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }
    document.getElementById("resultado").textContent = `Primos entre 1 y ${limite}: ${primos.join(", ")}`;
});