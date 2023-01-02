export class Respuesta{
    id?: number;
    descripcion:string | undefined;
    esCorrecta: boolean | undefined;

    constructor(descripcion:string, esCorrecta: boolean, id?: number){
        this.id = id;
        this.descripcion = descripcion;
        esCorrecta: esCorrecta;
    }
}