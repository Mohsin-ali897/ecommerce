interface ProductData {
    imageUrl: string | undefined;
    id: string;
    name: string;
    image?: { asset: { _ref: string; _type: string } }; // Sanity image type
    imagePath?: string;
    price: number;
    description: string;
    discountPercentage?: number;
    isFeaturedProduct?: boolean;
    stockLevel: number;
    category: string;
  }
  
export default ProductData;
  