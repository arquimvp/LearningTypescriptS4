"use strict";
/**
 * Genericos:
 *
 * Los genericos son aserciones que permiten trabajar con cualquier tipo de dato.
 */
//Funciones genericas:
function retornar(argumento) {
    return argumento;
}
//Yo puedo enviar cualquier tipo de dato:
//en el siguiente ejemplo yo puedo aplicar un metodo toFixed para acotar los decimales. Esto lo se porque estoy seguro que es un numero.
console.log(retornar(3.14165768).toFixed(2)); //3.14
//en la siguiente linea no permite el toFixed, si lo ejecutas mandara un error.
console.log(retornar('Alberto Martinez').toFixed(2)); //error en tiempo de ejecucion
//El mismo error sucede aqui:
console.log(retornar(new Date).toFixed(2)); //error en tiempo de ejecucion
//Para poder solventar los anteriores errores en tiempo de ejecucion, podemos utilizar los genericos:
// USO DE GENERICOS: La letra T es una convencion, se indica asi en la documentacion de typescript.
function devolver(argumento) {
    return argumento;
}
console.log(devolver(3.14165768).toFixed(2)); //3.14
console.log(devolver('Alberto Martinez').charAt(2)); //intenta poner otros metodos de strings
console.log(devolver(new Date).getMonth()); //intenta poner otros metodos de fechas
//Nosotros pudimos haber manejado los metodos correspondientes para tipo de dato, sin embargo es bueno que 
//typescript lo maneje por nosotros para evitar equivocarnos.
//# sourceMappingURL=app.js.map