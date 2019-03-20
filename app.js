"use strict";
//Funciones genericas:
function fGeneric(arg) {
    return arg;
}
//El siguiente objeto puede ser de ambos tipos anteriores
var maverik = {
    marca: 'chevrolet',
    motor: '4 cil',
    traccion: 'trasera'
};
console.log(fGeneric(maverik));
//Typescript nos permite acceder a las propiedades del tipo auto
console.log(fGeneric(maverik).marca);
console.log(fGeneric(maverik).motor);
//Typescript nos permite acceder a las propiedades del tipo camioneta
console.log(fGeneric(maverik).marca);
console.log(fGeneric(maverik).traccion);
//# sourceMappingURL=app.js.map