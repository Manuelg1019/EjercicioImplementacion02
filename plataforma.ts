import { canal } from "./canal";

export class plataforma {

    nombre: string;
    logo: string;
    descripcion: string;
    empresa: string;
    canales: canal[];

    constructor(nombre: string, logo: string, descricion: string, empresa: string, canales: canal){

        this.nombre = nombre
        this.logo = logo
        this.descripcion = descricion
        this.empresa = empresa
        this.canales = [];

    }


    static mostrarListadoPlataformas(plataformas: plataforma[]): void {
    console.log("Listado de Plataformas:");
    for (const plataforma of plataformas) {
      console.log(`- ${plataforma.nombre}`);
    }
  }

  mostrarDetallePlataforma(): void {
    console.log("Detalle de Plataforma:");
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Logo: ${this.logo}`);
    console.log(`Descripción: ${this.descripcion}`);
    console.log(`Empresa Patrocinadora: ${this.empresa}`);
  }
  

}