

export type TCategory = {
    name: string,
    image: string
}


//TODO fix all any 
export type TProduct = {
    id: number,
    image : any, //object
    name: string,
    category : string,
    description: string,
    features : string,
    gallery: any, //object
    price: number,
    slug: string,
    new : boolean,
    others: Array<any>,
    includes: Array<any>,
    quantity : number;
}
export interface IData {
    categories: Array<TCategory>,
    // products: Array<{id: number, slug: string, image: any, category: string, categoryImage: any}>
    products: Array<TProduct>
}