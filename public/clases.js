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

  agregarDifunto(pnuevoDifunto) {
    this.difuntos.push(pnuevoDifunto);
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

class Difunto{
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

  agregarReparaciones(pnuevaReparacion){
    this.reparaciones.push(pnuevaReparacion);
  }

  getReparaciones(){
    return this.reparaciones;
  }

  getidlapida(){
    return this.idlapida;
  }

  getInfoDifunto(){
    return `${this.idlapida} ${this.apodo}`;
  }
}

class Reparaciones{
  constructor(pcosto, pdescripcion){
    this.costo = pcosto;
    this.descripcion = pdescripcion;
  }
}