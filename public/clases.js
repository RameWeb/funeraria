// TODO Dentro de este archivo se crean los objetos con sus respectivos métodos
class Cliente{
  constructor(pFoto,pCedula,pNombre,pApellido,pFechanacimiento,pSexo,pUbicacion,pProvincia,pCanton,pDistrito,pUsuario,pContrasenna){
    this.foto = pFoto;
    this.cedula = pCedula;
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.fechanacimiento = pFechanacimiento;
    this.sexo = pSexo;
    this.ubicacion = pUbicacion;
    this.provincia = pProvincia;
    this.canton = pCanton;
    this.distrito = pDistrito;
    this.usuario = pUsuario;
    this.contrasenna = pContrasenna;
    this.difuntos = [];
  }

  agregarDifuntos(pnuevoDifuntos) {
    this.difuntos.push(pnuevoDifuntos);
  }

  getDifuntos(){
    return this.difuntos;
  }

  getCedula(){
    return this.cedula;
  }

  getNombre(){
    return `${this.nombre} ${this.apellido}`;
  }

}

class Difuntos{
  constructor(papodo, pedad, psexo, ptamanno){
    this.apodo = papodo;
    this.edad = pedad;
    this.sexo = psexo;
    this.tamanno = ptamanno;
    this.entierros = [];
    this.retoque = [];
    this.fiesta = [];
    
  }

 

 

  getInfoDifuntos(){
    return `${this.apodo} ${this.edad}`;
  }
}


