
//3- Decoradores anidados

function avisaConTiempo(constructor:Function){
  constructor.prototype.avisa = function(){
    console.log('esta funcion la adquiri mientras definia la clase!! ;)');
  }
}



function avisaConEnSegundoTiempo(constructor:Function){
  constructor.prototype.avisaSegundaVez = function(){
    console.log('esta funcion la adquiri despues de la anterior jaja!! ;)');
    console.log(this);
  }
}


@avisaConEnSegundoTiempo
@avisaConTiempo
class CualquierClase {
  constructor(public miNombre:string){

  }
}

let avisador : CualquierClase | any = new CualquierClase('mi nombre avisador');
avisador.avisa();
avisador.avisaSegundaVez();


