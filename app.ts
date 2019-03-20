//Decoradores: Es una funcion.
//Se atepone con al prefijo "@" antes de cada funcion, propiedad, metodo, clase. 
//No permite expandir su funcionalidad, agregandole cosas nuevas.
//Probablemente requiera habilitar "experimentalDocrators" = true en el tsconfig.json


//Hay 5 tipos de decaoradores:

//1- De Clase:
//Permiten interceptar al constructor de una clase, se llaman cuando se declara la clase (NO EN EL INSTANCIAMIENTO)
//declaro mi decorador:

function SelfDriving(constructorFunction: Function) {
  console.log('-- Ya se invoco al decorador desde la definicion de la clase ;) --');
  constructorFunction.prototype.selfDrivable = true;
}


//(vale la pena echarle un ojo a los prototypes en javascript)

@SelfDriving
class Developer {
  constructor(public perfil:string){

  }
}

let devIos: Developer | any = new Developer('IOS');
console.log(`selfDriving: ${devIos['selfDrivable']}`);


//2- Decoradores de fabrica: Se utilizan para pasar parametros.

function Wheels(numOfWheels: number) {
  console.log('-- decorador de fabrica invocado --');
  return function (constructor: Function) {
      console.log('-- decorador invocado --');
      constructor.prototype.wheels = numOfWheels;
  }
}

@Wheels(6)
class Auto {
  private _make: string;
  constructor(make: string) {
      console.log('-- constructor de clase invocado --');
      this._make = make;
  }
}

let carro: Auto | any = new Auto("Nissan 370z");
console.log(carro);
console.log(carro['wheels']);


//3- Decoradores agregando una funcion al prototype

function avisaConTiempo(constructor:Function){
  constructor.prototype.avisa = function(){
    console.log('esta funcion la adquiri mientras definia la clase!! ;)');
  }
}


@avisaConTiempo
class CualquierClase {
  constructor(public miNombre:string){

  }
}

let avisador : CualquierClase | any = new CualquierClase('mi nombre avisador');
avisador.avisa();


