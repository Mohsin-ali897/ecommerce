
// // import React from "react";
// // import { client } from "../../../sanity/lib/client";
// // import Navbar from "@/app/components/navbar";
// // import Footer from "@/app/components/footer";
// // import Mainbanner from "@/app/components/pagebanner";
// // import Productlist from "@/app/components/productlist";

// // interface Product {
// //   id: string;
// //   name: string;
// //   description: string;
// //   price: number;
// //   discountPercentage?: number;
// //   category: string;
// //   stockLevel: number;
// //   imageUrl?: string;
// // }

// // const Page = async ({ params}:{params:{id:string}}) => {
// //   const {id}= params;
// //   const query = `*[_type == "product" && id == $id]{
// //     "id":_id,
// //     name,
// //     description, 
// //     price, 
// //     "imageUrl": image.asset->url,
// //     category,
// //     discountPercentage, 
// //     stockLevel}[0]`;
// //     const product:Product | null = await client.fetch(query, { id });
// //     if(!product){
// //       return(
// //         <div>Product Not Found</div>
// //       )
// //     }

// //     return(

// // <div>
// //         <Navbar />
// //         <Mainbanner pageName="Shop" />
// //         <Productlist product={product} />
// //         <Footer />
// // </div>
// //     )
// // }
// // export default Page;
// import React from "react";
// import { client } from "../../../sanity/lib/client";
// import Navbar from "@/app/components/navbar";
// import Footer from "@/app/components/footer";
// import Mainbanner from "@/app/components/pagebanner";
// import Productlist from "@/app/components/productlist";

// interface Product {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   category: string;
//   stockLevel: number;
//   imageUrl: string;
//   quantity: number;
// }

// // interface PageProps {
// //   params: { id: string };
// // }
// interface PageProps {
//   params: Promise<{ id: string }>; // Change from `params: { id: string };`
// }

// const Page = async ({ params }: PageProps) => {
//   // const { id } = params;
//   const resolvedParams = await params; // Ensure params is awaited
//   const { id } = resolvedParams;

//   console.log("Fetching product with ID:", id); // Debugging

//   const query = `*[_type == "product" && id == $id]{
//     "id": _id,
//     name,
//     description, 
//     price, 
//     "imageUrl": image.asset->url,
//     category,
//     stockLevel,
//     quantity
//     stockLevel
//   }[0]`;

//   const product: Product | null = await client.fetch(query, { id });

//   console.log("Fetched product:", product); // Debugging

//   if (!product) {
//     return <div>Product Not Found</div>;
//   }

//   return (
//     <div>
//       <Navbar />
//       <Mainbanner pageName="Shop" />
//       <Productlist product={product} />
//       <Footer />
//     </div>
//   );
// };
// export default Page;
import React from "react";
import { client } from "../../../sanity/lib/client";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Mainbanner from "@/app/components/pagebanner";
import Productlist from "@/app/components/productlist";

// interface Product {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   discountPercentage?: number;
//   category: string;
//   stockLevel: number;
//   imageUrl?: string;
//   quantity: number;
// }

interface PageProps {
  params: { id: string }; // ✅ Fix: Use object, not Promise
}

const Page = async ({ params }: PageProps) => {
// const Page = async (params ) => {
  const { id } = params; // ✅ Fix: No need to await params

  console.log("Fetching product with ID:", id); // Debugging

  const query = `*[_type == "product" && id == $id]{ 
    "id": _id,
    name,
    description, 
    price, 
    "imageUrl": image.asset->url,
    category,
    stockLevel,
    quantity
  }[0]`;

  // const product: Product | null = await client.fetch(query, { id }); it is original
  const product= await client.fetch(query, { id }); 

  console.log("Fetched product:", product); // Debugging

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <div>
      <Navbar />
      <Mainbanner pageName="Shop" />
      <Productlist product={product} />
      <Footer />
    </div>
  );
};

export default Page;
