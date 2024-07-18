export default class TodoPersona {
  constructor() {
    this.contFem = 0;
    this.acumIngFem = 0;
    this.mayorIng = 0;
    this.auxNombre = "";
  }
  procesarPersona(per) {
    if (per.sexo == "F") {
      this.contFem++;
      this.acumIngFem += per.ingreso;
    }
    if (per.ingreso > this.mayorIng) {
      this.mayorIng = per.ingreso;
      this.auxNombre = per.nombre;
    }
  }
  calcPromFem() {
    return this.acumIngFem / this.contFem;
  }
  devolverMayorNom() {
    return this.auxNombre;
  }
  devolverMayorIng() {
    return this.mayorIng;
  }
}
