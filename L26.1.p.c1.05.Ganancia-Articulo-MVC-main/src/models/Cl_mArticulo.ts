export default class Cl_mArticulo {
  private _costo: number = 0;
  private _codigo: number = 0;
  private _venta: number = 0;

  constructor(
    { codigo, costo, venta}: { codigo: number; costo: number; venta: number } = {
      codigo: 0,
      costo: 0,
      venta: 0,
    },
  ) {
    this.codigo = codigo;
    this.costo = costo;
    this.venta= venta;
  }
  set costo(costo: number) {
    this._costo = +costo;
  }
  get costo(): number {
    return this._costo;
  }
  set codigo(codigo: number) {
    this._codigo = +codigo;
  }
  get codigo(): number {
    return this._codigo;

  }
    set venta(venta: number) {
    this._venta = +venta;
  }
  get venta(): number {
    return this._venta;}

  get ganancia(): number {
    return this.venta - this.costo;
  }
}