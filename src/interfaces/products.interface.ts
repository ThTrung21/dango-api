export interface iProduct{
    id: number;
    name: string;
    description: string;
    importPrice: number;
    price: number;
    categoryID: number;
    brandID: number;
    stock:number;
    image: string[];
}