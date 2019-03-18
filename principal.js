const { cursos, mostrarCurso, crearArchivo, argv } = require('./datos');

console.log(argv._[0]);
if (!argv.nombre){
// 	mostrarCurso(1,function(texto){
// 	console.log(texto);	
// 	mostrarCurso(2,function(texto){
// 		console.log(texto);	
// 		mostrarCurso(3,function(texto){
// 			console.log(texto);	
// 		})
// 	})
// })

let i=0;
	cursos.forEach(function(element) {
		let a = (i) => {			
  		setTimeout(function(){  				
					console.log(cursos[i]);	
  		},2000*(i+1));
  		};
  		a(i);
  		i++;
		});	
	
}
else {	
	crearArchivo (argv)
}
	

