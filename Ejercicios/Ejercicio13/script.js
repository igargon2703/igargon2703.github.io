document.getElementById("btnContar").addEventListener("click", () => {
    let frase = document.getElementById("fraseInput").value.trim();
    if (frase === "") {
        document.getElementById("resultado").textContent = "La frase tiene 0 palabras.";
        return;
    }
    let palabras = frase.split(/\s+/);
    document.getElementById("resultado").textContent = `La frase tiene ${palabras.length} palabra(s).`;
});