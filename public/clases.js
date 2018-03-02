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
  constructor(pmodelo, pmatricula, pmarca){
    this.modelo = pmodelo;
    this.matricula = pmatricula;
    this.marca = pmarca;
    this.reparaciones = [];
  }

  agregarReparaciones(pnuevaReparacion){
    this.reparaciones.push(pnuevaReparacion);
  }

  getReparaciones(){
    return this.reparaciones;
  }

  getmatricula(){
    return this.matricula;
  }

  getInfoDifunto(){
    return `${this.marca} ${this.modelo}`;
  }
}

class Reparaciones{
  constructor(pcosto, pdescripcion){
    this.costo = pcosto;
    this.descripcion = pdescripcion;
  }
}