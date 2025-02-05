interface  product {
      id: string;
      name: string;
      description: string;
      price: number;
      discountPercentage: number;
      imageUrl: string;
      category: string;
      stockLevel: number;
      quantity:number
    }
export const addTocart = ( product : product)=> {
    const cart:product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProductindex = cart.findIndex((item) => item.id === product.id);
    if (existingProductindex > -1) {
        cart[existingProductindex].stockLevel += 1;
        }else{
            cart.push({...product,stockLevel:1})
        }
        localStorage.setItem("cart", JSON.stringify(cart));
  }
export const removeItem = (id: string) => {
    const cart:product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  
export const getCartItems = (): product[] => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  }