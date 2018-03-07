
class Retoques{
  constructor(pTipoRetoque, pCosto, pRetoques){
      this.tipoRetoque = pTipoRetoque;
      this.costo = pCosto;
      this.retoques = pRetoques;
  }
}
class Entierro {
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

