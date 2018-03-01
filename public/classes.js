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