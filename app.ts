//Decoradores en los metodos:

class Villano {
  constructor(public nombre:string){

  }

  @editable(false)
  plan(){
    console.log('matar a superman');
  }
}


let batman = new Villano('Bruce');

batman.plan();

//Supongamos que voy a sobreescribir el metodo:
batman.plan = function(){
  console.log('hacer las pases con superman');
}

//Aqui mando a llamar mi nuevo metodo:
batman.plan();



//Ahora voy a crear mi decorador para mi metodo, este decorador impedira que sobreescriban mi metodo.

function editable (isEditable:boolean){
  
  //La siguiente linea es sintaxis para definir el decorador de metodos:
  return function(target:any, nombreProp:string, descriptor:PropertyDescriptor){

    if(!isEditable){
      console.warn('no cambiare de opinion');
    }
    descriptor.writable = isEditable;
  }
}