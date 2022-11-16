export interface Book {
    titulo: string;
    autor: string;
    genero: string;
    idioma: string;
    precio: number;
    descripcion:string;
    descripcionCorta:string;
    imagen: string;
    destacado: boolean;
    comprado: boolean;
    stock:number;
    favorito:boolean;
    cantidad:number;
    enCarrito: boolean;
    id?:number;
}