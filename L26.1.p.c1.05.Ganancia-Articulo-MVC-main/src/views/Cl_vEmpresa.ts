import Cl_mArticulo from "../models/Cl_mArticulo.js";
import Cl_mEmpresa from "../models/Cl_mEmpresa.js";

export default class Cl_vEmpresa {
  lblGanancia: HTMLLabelElement;
  btProcesar1Articulo: HTMLButtonElement;
  lblCodigoArticulo: HTMLElement;
  lblPrecioDeVenta: HTMLElement;
  lblArticuloMayGanancia: HTMLElement;
  lblCantidadArticulos: HTMLElement;   // <-- nuevo elemento

  constructor() {
    this.lblCodigoArticulo = document.getElementById(
      "body_lblCodigoArticulo"
    ) as HTMLLabelElement;
    this.lblPrecioDeVenta = document.getElementById(
      "body_lblPrecioDeVenta"
    ) as HTMLLabelElement;
    this.lblGanancia = document.getElementById(
      "body_lblGanancia"
    ) as HTMLLabelElement;
    this.btProcesar1Articulo = document.getElementById(
      "body_btProcesar1Articulo"
    ) as HTMLButtonElement;
    this.lblArticuloMayGanancia = document.getElementById(
      "body_lblArticuloMayGanancia"
    ) as HTMLElement;
    this.lblCantidadArticulos = document.getElementById(   // <-- nuevo
      "body_lblCantidadArticulos"
    ) as HTMLElement;
  }

  reportar({ empresa, articulo }: { empresa: Cl_mEmpresa; articulo: Cl_mArticulo }): void {
    this.lblCodigoArticulo!.innerHTML = `${articulo.codigo}`;
    this.lblPrecioDeVenta!.innerHTML = `${articulo.venta}`;
    this.lblGanancia!.innerHTML = `${empresa.totalGanancia}`;
    this.lblArticuloMayGanancia!.innerHTML = `${empresa.articuloMayorPrecioventa}`;
    this.lblCantidadArticulos!.innerHTML = `${empresa.cantidadArticulos}`;   // <-- mostrar contador
  }
}