let formula = document.getElementById("formula");
let resultado = document.getElementById("resultado");
let tablero = document.getElementById("tablero");
let botones = document.getElementById("botones");

let listaBotones = [
	["(", ")", "%", "AC"],
	["7", "8", "9", "/"],
	["4", "5", "6", "*"],
	["1", "2", "3", "-"],
	["0", ".", "=", "+"]
];

resultado.textContent = "0";

for (let fila of listaBotones) {
	for (let boton of fila) {

		let btn = document.createElement("button");
		btn.textContent = boton;
		btn.className = "btnCalc";

		if (boton === "=") {
			btn.dataset.type = "equals";
			btn.style.backgroundColor = "#f5bd22";
			btn.style.color = "#ffffff";
			btn.addEventListener("click", calcular);
		} else if (boton === "AC") {
			btn.dataset.type = "clear";
			btn.style.backgroundColor = "#FF0029";
			btn.style.color = "#ffffff";
			btn.addEventListener("click", limpiar);
		} else {
			btn.addEventListener("click", (function (valor) {
				return () => agregarFormula(valor);
			})(boton));
		}

		botones.appendChild(btn);
	}
}

function agregarFormula(valor) {
	formula.textContent += valor;
}

function limpiar() {
	formula.textContent = "";
	resultado.textContent = "0";
}

function calcular() {

	if (formula.textContent.trim() === "") {
		resultado.textContent = "0";
		return;
	}

	try {
		resultado.textContent = eval(formula.textContent);
	} catch (error) {
		resultado.textContent = "Error";
	}
}
