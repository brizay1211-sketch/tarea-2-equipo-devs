export default class Cl_mEmpresa {
    acGanancia = 0;
    mayPrecio = 0;
    nombreMayPrecio = 0;
    cntArticulos = 0; // <-- nuevo contador
    procesarArticulo(a) {
        this.acGanancia += a.ganancia;
        this.cntArticulos++; // incrementar contador
        if (a.venta > this.mayPrecio) {
            this.mayPrecio = a.venta;
            this.nombreMayPrecio = a.codigo;
        }
    }
    get totalGanancia() {
        return this.acGanancia;
    }
    get articuloMayorPrecioventa() {
        return this.nombreMayPrecio;
    }
    get cantidadArticulos() {
        return this.cntArticulos;
    }
}
//# sourceMappingURL=Cl_mEmpresa.js.map