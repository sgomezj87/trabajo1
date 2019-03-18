// let curso1 = {
// 	nombre: 'Curso Node.JS',
// 	duracion: 32,
// 	valor: 0
// };

// let curso2 = {
// 	nombre: 'Ingles',
// 	duracion: 64,
// 	valor: 200000
// };

// let curso3 = {
// 	nombre: 'Bolsa de valores',
// 	duracion: 32,
// 	valor: 150000
// };
const fs = require('fs');




const matricula = {
	id:{
			demand: true,
			alias: 'i'
			
		},
	nombre:{
			alias: 'n',
			demand: true,
		},
	cedula:{
			alias: 'x',
			demand: true,
		}

}

const argv = require('yargs')
			.command('inscribir','Inscribirme en un curso', matricula)
			.help()
			.argv


let cursos = [{
	id: 1,
	nombre: 'Curso Node.JS',
	duracion: 32,
	valor: 0
},{
	id: 2,
	nombre: 'Ingles',
	duracion: 64,
	valor: 200000
},{
	id: 3,
	nombre: 'Bolsa de valores',
	duracion: 32,
	valor: 150000
}];

//Metodo 1
// let mostrarCursos = (curso1, curso2, curso3,callback) => {
// 	setTimeout(function(){
// 		console.log ('El curso 1 se llama ' + curso1.nombre + " tiene una duración de " + curso1.duracion + ' y un valor de ' + curso1.valor);
// 	},2000);	
// 	setTimeout(function(){
// 		console.log ('El curso 2 se llama ' + curso2.nombre + " tiene una duración de " + curso2.duracion + ' y un valor de ' + curso2.valor );
// 	},4000);	
// 	setTimeout(function(){
// 		console.log ('El curso 3 se llama ' + curso3.nombre + " tiene una duración de " + curso3.duracion + ' y un valor de ' + curso3.valor );
// 	},6000);		
// };

// mostrarCursos(curso1, curso2, curso3);

//Metodo 2
// let mostrarCurso = (curso, callback) => {
// 	setTimeout(function(){
// 		let texto =('El curso se llama ' + curso.nombre + " tiene una duración de " + curso.duracion + ' y un valor de ' + curso.valor);
// 		//console.log(texto);	
// 		callback(texto);
// 	},2000);
// };

// mostrarCurso(curso1,function(texto){
// 	console.log(texto);	
// 	mostrarCurso(curso2,function(texto){
// 		console.log(texto);	
// 		mostrarCurso(curso3,function(texto){
// 			console.log(texto);	
// 		})
// 	})
// })

//Metodo 3
let mostrarCurso = (id, callback) => {
	let cursoEncontrado = cursos.find( curso =>  curso.id == id)
	setTimeout(function(){
		let texto =('El curso se llama ' + cursoEncontrado.nombre + " tiene una duración de " + cursoEncontrado.duracion + ' y un valor de ' + cursoEncontrado.valor);
		//console.log(texto);	
		callback(texto);
	},2000);
};

// mostrarCurso2(1,function(texto){
// 	console.log(texto);	
// })	

// let imprimirCurso = (id) => {
// 	let cursoEncontrado = cursos.find( curso =>  curso.id == id)
// 	if (!cursoEncontrado){
// 		return (`no existe un curso con ID ` + id);
// 	} else {
// 		return ('Se ha matriculado en el curso llamado ' + cursoEncontrado.nombre + " tiene una duración de " + cursoEncontrado.duracion + ' y un valor de ' + cursoEncontrado.valor);
// 	}
// };

let imprimirCurso = id => {
	let cursoEncontrado = buscarCurso(id);
	if (!cursoEncontrado){
		return (`no existe un curso con ID ` + id);
	}
	else {
		return ('Se ha matriculado en el curso llamado ' + cursoEncontrado.nombre + " tiene una duración de " + cursoEncontrado.duracion + ' y un valor de ' + cursoEncontrado.valor);
	}
};

let buscarCurso = id => {
	let cursoEncontrado = cursos.find( curso =>  curso.id == id)
	if (!cursoEncontrado){
		return false;
	} else {
		return cursoEncontrado;
	}
}


let crearArchivo = (estudiante)=>{	
	let cursoEncontrado = buscarCurso(estudiante.clsid);
	if (!cursoEncontrado){
		console.log (`no existe un curso con ID ` + estudiante.id);
	}
	else {
	texto = 'el estudiante ' + estudiante.nombre +'\n' +
			'con cedula'+ estudiante.cedula +'\n' +
			imprimirCurso(estudiante.id);
		fs.writeFile(`matricula.txt`, texto , (err) => {
		  	  	if (err) throw (err);
		  		console.log ('se ha creado el archivo');		  	
			});
	}
}




module.exports = {
	cursos,
	mostrarCurso,
	crearArchivo,
	argv	

};


// let getEmpleado = (id, callback) => {
// 	//let empleadoDB = empleados.find( empleado => {
// 	//	return empleado.id == id
// 	//})
// 	let empleadoDB = empleados.find( empleado =>  empleado.id == id)
// 	if (!empleadoDB){
// 		callback(`no existe un empleado con ID ${ id}`)
// 	} else {
// 		callback (null, empleadoDB);
// 	}
// }