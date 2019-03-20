"use strict";
//Decoradores en los metodos:
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    Villano.prototype.plan = function () {
        console.log('matar a superman');
    };
    __decorate([
        editable(false)
    ], Villano.prototype, "plan", null);
    return Villano;
}());
var batman = new Villano('Bruce');
batman.plan();
//Supongamos que voy a sobreescribir el metodo:
batman.plan = function () {
    console.log('hacer las pases con superman');
};
//Aqui mando a llamar mi nuevo metodo:
batman.plan();
//Ahora voy a crear mi decorador para mi metodo, este decorador impedira que sobreescriban mi metodo.
function editable(isEditable) {
    return function (target, nombreProp, descriptor) {
        if (!isEditable) {
            //console.warn('no cambiare de opinion');
        }
        descriptor.writable = isEditable;
    };
}
//# sourceMappingURL=app.js.map