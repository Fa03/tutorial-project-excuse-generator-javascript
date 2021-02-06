window.onload = function (){

let who =  ['Mi perro','Mi abuela','Mi hermano','El Vecino'];
let action = ['murio','tropezo', 'escapo','olvido'];
let what = ['las llaves','el libro','el paraguas'];
let when =['ayer','hoy en la manana','desde anoche','hace 2 dias','antes de la leccion']; 


let mensaje = who[(Math.floor(Math.random() * who.length))] + " " +     
                action[(Math.floor(Math.random() * action.length))] + " " + 
                what[(Math.floor(Math.random() * what.length))] + " " +     
                when[(Math.floor(Math.random() * when.length))]

document.querySelector ("#La_Excusa").innerHTML = mensaje;


}

