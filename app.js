"use strict";
//3- Decoradores anidados
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function avisaConTiempo(constructor) {
    constructor.prototype.avisa = function () {
        console.log('esta funcion la adquiri mientras definia la clase!! ;)');
    };
}
function avisaConEnSegundoTiempo(constructor) {
    constructor.prototype.avisaSegundaVez = function () {
        console.log('esta funcion la adquiri despues de la anterior jaja!! ;)');
        console.log(this);
    };
}
var CualquierClase = /** @class */ (function () {
    function CualquierClase(miNombre) {
        this.miNombre = miNombre;
    }
    CualquierClase = __decorate([
        avisaConEnSegundoTiempo,
        avisaConTiempo
    ], CualquierClase);
    return CualquierClase;
}());
var avisador = new CualquierClase('mi nombre avisador');
avisador.avisa();
avisador.avisaSegundaVez();
//# sourceMappingURL=app.js.map