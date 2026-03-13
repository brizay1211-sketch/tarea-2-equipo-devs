
import Cl_mEmpresa from "../models/Cl_mEmpresa.js";
import Cl_vEmpresa from "../views/Cl_vEmpresa.js";
import Cl_cArticulo from "./Cl_cArticulo.js";

export default class Cl_cEmpresa {
  private mEmpresa: Cl_mEmpresa = new Cl_mEmpresa();
  private vEmpresa: Cl_vEmpresa = new Cl_vEmpresa();

  constructor() {
    this.vEmpresa.btProcesar1Articulo.onclick = () => this.procesar1Articulo();
  }
  procesar1Articulo(): void {
    new Cl_cArticulo({
      callback: (articulo) => {
        if (articulo) {
          this.mEmpresa.procesarArticulo(articulo);
          this.vEmpresa.reportar({ empresa: this.mEmpresa, articulo });
        }
      },
    });
  }
}
