import { canal } from "./canal";
import { stream } from "./stream";


export class streamer {

    nickName: string[];
    descripcion : string;
    redesSociales : string[];
    canales : canal[];
    streams : stream[];

    constructor(nickName: string[], descripcion: string, redesSociales: string[], canales: canal[], streams: stream[]){

        this.nickName = []
        this.descripcion = descripcion
        this.redesSociales = []
        this.canales = []
        this.streams = []
    }

    static mostrarListadoStreamers(streamers: streamer[]): void {
        console.log("Listado de Streamers:");
        for (const streamer of streamers) {
          console.log(`- ${streamer.nickName}`);
        }
      }
    
      mostrarDetalleStreamer(): void {
        console.log("Detalle de Streamer:");
        console.log(`Nickname: ${this.nickName}`);
        console.log(`Descripción: ${this.descripcion}`);
        console.log("Redes Sociales:");
        for (const redSocial of this.redesSociales) {
          console.log(`- ${redSocial}`);
        }
      }
      
      agregarCanal (c: canal):void{
        this.canales.push(c)
        c.nickName.push(this);

      }    
    
}
