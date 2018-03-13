
// TODO Dentro de este archivo se crean los objetos con sus respectivos mÃ©todos
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
  constructor(pidlapida, papodo, pedad, psexo, ptamanno){
    this.idlapida = pidlapida; 
    this.apodo = papodo;
    this.edad = pedad;
    this.sexo = psexo;
    this.tamanno = ptamanno;
    this.entierros = [];
    this.retoques = [];
  }

  agregarEntierros(pnuevoEntierro){
    this.entierros.push(pnuevoEntierro);
  }

  agregarRetoque(pnuevoRetoque){
    this.retoques.push(pnpnuevoRetoqueue);
  }

  getEntierros(){
    return this.entierros;
  }

  getidlapida(){
    return this.idlapida;
  }

  getInfoDifunto(){
    return `${this.marca} ${this.modelo}`;
  }
}

class Retoques{
  constructor(pTipoRetoque, pCosto, pRetoques){
      this.tipoRetoque = pTipoRetoque;
      this.costo = pCosto;
      this.retoques = pRetoques;
  }
}
class Entierros {
  constructor(pHoraInicio,pHoraFinal,pFecha,pLugar,pPrioridad){
    this.horaInicio = pHoraInicio;
    this.horaFinal = pHoraFinal;
    this.fecha = pFecha;
    this.lugar = pLugar;
    this.prioridad = pPrioridad;//max dos valores
  }
  obtenerHora(){ //formato de la hora con horas y minutos
  return `${this.horaInicio.getHours()} : ${this.horaInicio.getMinutes()}`;
  }
}
class Fiesta{
  constructor(pFecha, pCantidadHoras, pPago){
    this.fecha = pFecha;
    this.horas = pCantidadHoras;
    this.pago=pPago;
    this.animadores = [];
  }
  
  setAnimador(panimador){
    this.animadores.push(panimador);
  }

  getAnimadores() {
    return this.animadores;
  }

  getFecha(){
    return `${this.fecha.getDay()}/${this.fecha.getMonth()}/${this.fecha.getYear()}`;
  }
}

class Animador{
  constructor(pNombreAnimador, pCosto){
    this.nombreAnimador = pNombreAnimador;
    this.costo = pCosto;
  }
}