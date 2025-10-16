import { notFound, redirect } from "next/navigation";

function getRandomInt(count:number) {
  return Math.floor(Math.random() * count);
}
//Server Component
export default async function ProductsById({
    params
}:{
  params:Promise<{id:string,reviewId:string}>
}) {
  const random=getRandomInt(2)
  if(random===1){
    throw new Error("Error loading review data");
  }
  const {id,reviewId}=await params;
  if(parseInt(id)>1000){
    // notFound();
    console.log("Redirecting to /products page as product id is invalid");
    
    redirect('/products');
  }
  return (
    <main>
      <h1>Welcome to Products By Id Page with product Id {id} and review with Id {reviewId}!</h1>
    </main>
  );
}