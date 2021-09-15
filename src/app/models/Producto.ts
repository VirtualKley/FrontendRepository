import { Categoria } from "./Categoria";
import { Marca } from "./Marca";
import { Proveedor } from "./Proveedor";

export interface Producto{
    id?: number;
    descripcion: string;
    categoria_id: number;
    proveedor_id: number;
    marca_id: number;
    medidas: string;
    precio_unitario: number;

    categoria?: Categoria;
    marca?: Marca;
    proveedor?: Proveedor;
}