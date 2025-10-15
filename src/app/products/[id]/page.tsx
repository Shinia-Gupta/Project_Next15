import { Metadata } from "next";
import { resolve } from "path";

//Server Component
type Props={
params:Promise<{id:string}>
}

//WAY 2 of configuring metadata - the method name should be same i.e generateMetadata()
export const generateMetadata=async({params}:Props):Promise<Metadata>=>{
    const productId=(await params).id;
    const title=await new Promise((resolve)=>setTimeout(()=>resolve(`Product ${productId} Metadata title`),1000));
    return {
        // title:`Product ${productId} Metadata title`
        //or
        title:`${title}`

    }
}
//if we look in the elements tab of dev tools
//we can see the title of this page is "Product 123 Metadata title"
//if we go to http://localhost:3000/products/123
//and if we go to http://localhost:3000/products/456
//we can see the title of this page is "Product 456 Metadata title"
//so metadata is generated at request time and it is dynamic
//it is different for different requests

//if we remove this generateMetadata function from this file
//then the title of this page will be "Next.js App Router"
//because now only parent metadata is present
//and child metadata is not present

//we can also make this function async
//if we want to fetch some data from server to generate metadata
//we can use params also in this function
//we can use anything which is available at request time in this function


//**IMPORTANT**- We can not make both static metadata object and dynamic metadata in the same route. 
// Also, we cannot set the metdata in client components */
export default async function ProductsById({
    params
}:{
  params:Promise<{id:string}>
}) {
  const productId=(await params).id;
  return (
    <main>
      <h1>Welcome to Products By Id Page with product Id {productId}!</h1>
    </main>
  );
}