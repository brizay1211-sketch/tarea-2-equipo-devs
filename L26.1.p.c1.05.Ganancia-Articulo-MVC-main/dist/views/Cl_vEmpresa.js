export default class Cl_vEmpresa {
    lblGanancia;
    btProcesar1Articulo;
    lblCodigoArticulo;
    lblPrecioDeVenta;
    lblArticuloMayGanancia;
    lblCantidadArticulos; // <-- nuevo elemento
    constructor() {
        this.lblCodigoArticulo = document.getElementById("body_lblCodigoArticulo");
        this.lblPrecioDeVenta = document.getElementById("body_lblPrecioDeVenta");
        this.lblGanancia = document.getElementById("body_lblGanancia");
        this.btProcesar1Articulo = document.getElementById("body_btProcesar1Articulo");
        this.lblArticuloMayGanancia = document.getElementById("body_lblArticuloMayGanancia");
        this.lblCantidadArticulos = document.getElementById(// <-- nuevo
        "body_lblCantidadArticulos");
    }
    reportar({ empresa, articulo }) {
        this.lblCodigoArticulo.innerHTML = `${articulo.codigo}`;
        this.lblPrecioDeVenta.innerHTML = `${articulo.venta}`;
        this.lblGanancia.innerHTML = `${empresa.totalGanancia}`;
        this.lblArticuloMayGanancia.innerHTML = `${empresa.articuloMayorPrecioventa}`;
        this.lblCantidadArticulos.innerHTML = `${empresa.cantidadArticulos}`; // <-- mostrar contador
    }
}
//# sourceMappingURL=Cl_vEmpresa.js.map