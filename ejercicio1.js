function resolverEcuacion() {
    
    let A = parseFloat(document.getElementById("a").value);
    let B = parseFloat(document.getElementById("b").value);
    let C = parseFloat(document.getElementById("c").value);

 
    if (isNaN(A) || isNaN(B) || isNaN(C)) {
        alert("Por favor, ingrese valores válidos para A, B y C.");
        return;
    }

   
    let discriminante = B * B - 4 * A * C;

    
    if (discriminante > 0) {
        let raiz1 = (-B + Math.sqrt(discriminante)) / (2 * A);
        let raiz2 = (-B - Math.sqrt(discriminante)) / (2 * A);
        document.getElementById("raiz1").textContent = raiz1;
        document.getElementById("raiz2").textContent = raiz2;
    }
    
    else if (discriminante === 0) {
        let raiz = -B / (2 * A);
        document.getElementById("raiz1").textContent = raiz;
        document.getElementById("raiz2").textContent = raiz;
    }
    
    else {
        let parteReal = -B / (2 * A);
        let parteImaginaria = Math.sqrt(-discriminante) / (2 * A);
        document.getElementById("raiz1").textContent = `${parteReal} + ${parteImaginaria}i`;
        document.getElementById("raiz2").textContent = `${parteReal} - ${parteImaginaria}i`;
    }
}
