export type TCategory = {
    name: string,
    image: string
}

type TProductImage = {
    mobile : string,
    tablet : string,
    desktop: string
}

type TProductGallery = {
    first : TProductImage,
    second : TProductImage,
    third : TProductImage  
}

type TProductOthers = {
    slug: string,
    name: string,
    image: TProductImage
}

type TProductIncludes = {
    quantity: number,
    item : string
}

export type TProduct = {
    id: number,
    image : TProductImage,
    name: string,
    category : string,
    description: string,
    features : string,
    gallery: TProductGallery,
    price: number,
    slug: string,
    new : boolean,
    others: Array<TProductOthers>,
    includes: Array<TProductIncludes>,
    quantity : number;
}
export interface IData {
    categories: Array<TCategory>,
    // products: Array<{id: number, slug: string, image: any, category: string, categoryImage: any}>
    products: Array<TProduct>
}