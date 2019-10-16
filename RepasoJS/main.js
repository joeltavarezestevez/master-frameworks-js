var nombre = "Joel Tavarez ";
var altura = 175;

var datos = document.getElementById('datos');
datos.innerHTML = `
<h2>Hola Esto Se Escribe desde Javascript</h2>
<h3>Mi nombre es ${nombre}</h3>
<h4>Mido: ${altura} cm</h4>
`;

var saludar = new Promise(function(resolve,reject){
	setTimeout(() => {
		let saludo;
		if(saludo) {
			resolve(saludo)
		}
		else {
			reject('No hay ningun saludo disponible');
		}
	}, 2000);
});

saludar.then(resultado => {
	alert(resultado);
})
.catch(err => {
	alert(err);
})