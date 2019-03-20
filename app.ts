
//Funciones genericas:

function fGeneric<T>(arg:T){
  return arg;
}


type auto = {
  marca: string;
  motor: string;
}

type camioneta = {
  marca: string;
  traccion: string;
}


//El siguiente objeto puede ser de ambos tipos anteriores
let maverik = {
  marca: 'chevrolet',
  motor: '4 cil',
  traccion: 'trasera'
}


console.log(fGeneric(maverik));

//Typescript nos permite acceder a las propiedades del tipo auto
console.log(fGeneric<auto>(maverik).marca);
console.log(fGeneric<auto>(maverik).motor);

//Typescript nos permite acceder a las propiedades del tipo camioneta
console.log(fGeneric<camioneta>(maverik).marca);
console.log(fGeneric<camioneta>(maverik).traccion);
