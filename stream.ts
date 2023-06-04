
import { canal } from "./canal";
import { categoria } from "./categoria";

export class stream {

    nombre: string;
    canal: canal;
    categorias : categoria[];

    constructor(nombre: string, canal : canal, categorias: categoria []){

        this.nombre = nombre;
        this.canal = canal
        this.categorias = [];
    }
    static mostrarListadoStreams(streams: stream[]): void {
        console.log("Listado de Streams:");
        for (const stream of streams) {
          console.log(`- Categorías: ${stream.categorias.map(categoria => categoria.nombre).join(", ")}`);
        }
      }
    
      mostrarDetalleStream(): void {
        console.log("Detalle de Stream:");
        console.log("Categorías:");
        for (const categoria of this.categorias) {
          console.log(`- Nombre: ${categoria.nombre}`);
          console.log(`  Descripción: ${categoria.descripcion}`);
          console.log(`  Imagen: ${categoria.imagen}`);
        }
      }
    
      
}
