// TODO Dentro de este archivo se crean los objetos con sus respectivos métodos
class Cliente{
  constructor(pCedula, pNombre1, pApellido1, pEdad){
    this.cedula = pCedula;
    this.nombre1 = pNombre1;
    this.apellido1 = pApellido1;
    this.edad = pEdad;
    this.difuntos = [];
  }

  agregarDifuntos(pnuevoDifuntos) {
    this.difuntos.push(pnuevoDifuntos);
  }

  getDifuntos(){
    return this.difuntos;
  }

  getcedula(){
    return this.cedula;
  }

  getNombre(){
    return `${this.nombre1} ${this.apellido1}`;
  }
}

class Difuntos{
  constructor(papodo, pedad, psexo, ptamanno, pidlapida){
    this.apodo = papodo;
    this.edad = pedad;
    this.sexo = psexo;
    this.tamanno = ptamanno;
    this.idlapida = pidlapida; 
    this.entierros = [];
    this.retoque = [];
    this.fiesta = [];
    
  }

 
  getidlapida(){
    return this.idlapida;
  }

 

  getInfoDifuntos(){
    return `${this.apodo} ${this.edad}`;
  }
}

