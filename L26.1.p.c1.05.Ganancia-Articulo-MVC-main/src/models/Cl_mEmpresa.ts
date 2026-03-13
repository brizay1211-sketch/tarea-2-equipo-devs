import Cl_mArticulo from "./Cl_mArticulo.js";

export default class Cl_mEmpresa {
  private acGanancia: number = 0;
  private mayPrecio: number = 0;
  private nombreMayPrecio: number = 0;
  private cntArticulos: number = 0;   // <-- nuevo contador

  procesarArticulo(a: Cl_mArticulo): void {
    this.acGanancia += a.ganancia;
    this.cntArticulos++;   // incrementar contador

    if (a.venta > this.mayPrecio) {
      this.mayPrecio = a.venta;
      this.nombreMayPrecio = a.codigo;
    }
  }

  get totalGanancia(): number {
    return this.acGanancia;
  }
  get articuloMayorPrecioventa(): number {
    return this.nombreMayPrecio;
  }
  get cantidadArticulos(): number {   // <-- nuevo getter
    return this.cntArticulos;
  }
}