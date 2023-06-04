import { categoria } from "./categoria";
import { plataforma } from "./plataforma";
import { stream } from "./stream";
import { streamer } from "./streamer";

export class canal {
    nombre: string;
    banner: string;
    nickName: streamer[];
    descripcion: string;
    categorias: categoria[];
    plataformas: plataforma[];
    streams : stream[];

    constructor(nombre: string, banner: string, nickName: streamer[], descripcion : string, categorias: categoria[], plataformas: plataforma[],streams: stream[]){

        this.nombre = nombre
        this.banner = banner
        this.nickName = []
        this.descripcion = descripcion
        this.categorias = []
        this.plataformas = []
        this.streams = []
        
    }
    
    static mostrarListadoCanales(canales: canal[]): void {
        console.log("Listado de Canales:");
        for (const canal of canales) {
          console.log(`- ${canal.nombre}`);
        }
      }
    
    
    mostrarDetalleCanal(): void {
        console.log("Detalle de Canal:");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Banner: ${this.banner}`);
        console.log(`Streamer: ${this.nickName}`);
        console.log(`Descripción: ${this.descripcion}`);
      }
    
      agregarPlataforma (p: plataforma): void{
        this.plataformas.push(p)

      }
      agregarStreamer (s: streamer): void {
        this.nickName.push(s)

      }
    
      agregarStream(stream: stream): void {
        this.streams.push(stream);
        console.log(`Stream agregado al streamer ${this.nickName}`);
      }
    }

