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