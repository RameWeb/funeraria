<<<<<<< HEAD
<<<<<<< HEAD
class Retoques{
    constructor(pTipoRetoque, pCosto, pRetoques){
        this.tipoRetoque = pTipoRetoque;
        this.costo = pCosto;
        this.retoques = pRetoques;
    }
=======
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
>>>>>>> origin/Jason
=======
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
>>>>>>> origin/Nicole
}