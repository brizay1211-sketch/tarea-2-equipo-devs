export default class Cl_vArticulo {
  inCosto: HTMLInputElement;
  inCodigo: HTMLInputElement;
  inVenta: HTMLInputElement;
  btCancelar: any;
  btAceptar: any;
  vista: HTMLElement;
  constructor() {
    this.vista = document.getElementById("articulo") as HTMLElement;
    this.inCodigo = document.getElementById("articulo_inCodigo") as HTMLInputElement;
    this.inCosto = document.getElementById("articulo_inCosto") as HTMLInputElement;
     this.inVenta = document.getElementById("articulo_inVenta") as HTMLInputElement;
    this.btCancelar = document.getElementById("articulo_btCancelar");
    this.btAceptar = document.getElementById("articulo_btAceptar");
    this.mostrar();
  }
  get codigo(): number {
    return +this.inCodigo.value
  }
  get costo(): number {
    return +this.inCosto.value
  }

  get venta(): number {
    return +this.inVenta.value
  }

  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }
  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}