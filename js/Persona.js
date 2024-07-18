export default class Persona {
  constructor(nom, s, ing) {
    this.nombre = nom;
    this.sexo = s;
    this.ingreso = ing;
  }
  set nombre(nom) {
    this._nombre = nom;
  }
  set sexo(s) {
    this._sexo = s;
  }
  set ingreso(ing) {
    this._ingreso = ing;
  }
  get nombre() {
    return this._nombre;
  }
  get sexo() {
    return this._sexo;
  }
  get ingreso() {
    return this._ingreso;
  }
}
