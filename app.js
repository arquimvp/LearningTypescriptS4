"use strict";
//Decoradores: Es una funcion.
//Se atepone con al prefijo "@" antes de cada funcion, propiedad, metodo, clase. 
//No permite expandir su funcionalidad, agregandole cosas nuevas.
//Probablemente requiera habilitar "experimentalDocrators" = true en el tsconfig.json
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Hay 5 tipos de decaoradores:
//1- De Clase:
//Permiten interceptar al constructor de una clase, se llaman cuando se declara la clase (NO EN EL INSTANCIAMIENTO)
//declaro mi decorador:
function SelfDriving(constructorFunction) {
    console.log('-- Ya se invoco al decorador desde la definicion de la clase ;) --');
    constructorFunction.prototype.selfDrivable = true;
}
//(vale la pena echarle un ojo a los prototypes en javascript)
var Developer = /** @class */ (function () {
    function Developer(perfil) {
        this.perfil = perfil;
    }
    Developer = __decorate([
        SelfDriving
    ], Developer);
    return Developer;
}());
var devIos = new Developer('IOS');
console.log("selfDriving: " + devIos['selfDrivable']);
//2- Decoradores de fabrica: Se utilizan para pasar parametros.
function Wheels(numOfWheels) {
    console.log('-- decorador de fabrica invocado --');
    return function (constructor) {
        console.log('-- decorador invocado --');
        constructor.prototype.wheels = numOfWheels;
    };
}
var Auto = /** @class */ (function () {
    function Auto(make) {
        console.log('-- constructor de clase invocado --');
        this._make = make;
    }
    Auto = __decorate([
        Wheels(6)
    ], Auto);
    return Auto;
}());
var carro = new Auto("Nissan 370z");
console.log(carro);
console.log(carro['wheels']);
//3- Decoradores agregando una funcion al prototype
function avisaConTiempo(constructor) {
    constructor.prototype.avisa = function () {
        console.log('te estoy avisando antes de definir la clase!! ;)');
    };
}
var CualquierClase = /** @class */ (function () {
    function CualquierClase(miNombre) {
        this.miNombre = miNombre;
    }
    CualquierClase = __decorate([
        avisaConTiempo
    ], CualquierClase);
    return CualquierClase;
}());
var avisador = new CualquierClase('mi nombre avisador');
avisador.avisa();
//# sourceMappingURL=app.js.map