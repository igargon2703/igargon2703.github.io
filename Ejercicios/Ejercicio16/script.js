function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

document.getElementById("btnConvertir").addEventListener("click", () => {
    let valor = document.getElementById("celsiusInput").value;
    if (valor === "") {
        document.getElementById("resultado").textContent = "Introduce una temperatura.";
        return;
    }
    let celsius = Number(valor);
    let fahrenheit = celsiusAFahrenheit(celsius);
    document.getElementById("resultado").textContent = `${celsius} °C equivalen a ${fahrenheit} °F`;
});